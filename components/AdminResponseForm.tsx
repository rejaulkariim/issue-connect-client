"use client";
import { useAxiosPost } from "@/hooks/useAxiosPost";
import { RootState } from "@/store/store";
import socket from "@/utils/socket";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "./ui/use-toast";

type Inputs = {
  content: string;
};

const AdminResponseForm = ({ topicId, refetch }: any) => {
  // const [newMessage, setNewMessage] = useState<any>([]);
  // console.log("newMessage✅", newMessage);

  // useEffect(() => {
  //   socket.on("new-message", (data) => {
  //     setNewMessage((prevNewMessage: any) => [...prevNewMessage, data]);
  //   });

  //   return () => {
  //     socket.off("new-message");
  //   };
  // }, []);

  // Hooks
  const { axiosPost, isLoading, error } = useAxiosPost();

  const user = useSelector((state: RootState) => state?.user?.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // Submit handler
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axiosPost(
      `/api/admin/issue/${topicId}`,
      { ...data },
      user?.token
    );

    if (res) {
      socket.emit("new-message", data);
      reset();
      refetch();
      setNewMessage(data);
      toast({ title: "Success🔥", description: "Message has been send" });
    }
  };
  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Details message</Label>
        <Input
          id="message"
          placeholder="Message..."
          {...register("content", { required: true })}
        />
        {errors.content && (
          <p className="text-red-500">Message field is required</p>
        )}
      </div>
      <Button type="submit">
        {isLoading ? (
          <>
            <Loading />
            Sending
          </>
        ) : (
          "Send"
        )}
      </Button>
    </form>
  );
};

export default AdminResponseForm;
