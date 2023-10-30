"use client";
import { useAxiosPost } from "@/hooks/useAxiosPost";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import useFetchTopic from "@/hooks/useTopicFetch";
import { RootState } from "@/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "./ui/use-toast";

type Inputs = {
  title: string;
  message: string;
};

const CreateTopicForm = () => {
  // Hooks
  const { axiosPost, isLoading, error } = useAxiosPost();
  const { refetch } = useFetchTopic();

  const token = useSelector((state: RootState) => state?.user?.user.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axiosPost("/api/user/topic/create", { ...data }, token);

    if (res) {
      refetch();
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
        <Label htmlFor="message">Details</Label>
        <Textarea
          id="message"
          placeholder="Message..."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="text-red-500">Message field is required</p>
        )}
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default CreateTopicForm;
