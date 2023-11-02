"use client";
import { useAxiosPost } from "@/hooks/useAxiosPost";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import useFetchTopic from "@/hooks/useTopicFetch";
import { RootState } from "@/store/store";
import socket from "@/utils/socket";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "./ui/use-toast";

type Inputs = {
  title: string;
  subject: string;
};

const CreateTopicForm = ({ setOpen }: any) => {
  // Hooks
  const { axiosPost, isLoading, error } = useAxiosPost();
  const { refetch } = useFetchTopic();

  const user = useSelector((state: RootState) => state?.user?.user);
  const token = user?.token;

  console.log(user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axiosPost("/api/user/topic/create", { ...data }, token);

    socket.emit("new-topic", { topic: data, user: user?.user });

    if (res) {
      refetch();
      reset();
      setOpen(false);
      toast({ title: "Success🔥", description: "Your message has been send." });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          placeholder="Give your requast a name"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <p className="text-red-500">Title field is required</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Textarea
          id="subject"
          placeholder="Subject..."
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="text-red-500">Subject field is required</p>
        )}
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default CreateTopicForm;
