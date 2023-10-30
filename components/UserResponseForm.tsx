import { useAxiosPost } from "@/hooks/useAxiosPost";
import { RootState } from "@/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

type Inputs = {
  content: string;
};

const UserResponseForm = ({ topicId }: any) => {
  // Hooks
  const { axiosPost, isLoading, error } = useAxiosPost();

  const user = useSelector((state: RootState) => state?.user?.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // Submit handler
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await axiosPost(
      `/api/user/topic/${topicId}`,
      { ...data },
      user?.token
    );

    console.log("🔥", res);

    if (res) {
      toast({ title: "Success🔥", description: "Message has been send" });
    }
  };
  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Details</Label>
        <Textarea
          id="message"
          placeholder="Message..."
          {...register("content", { required: true })}
        />
        {errors.message && (
          <p className="text-red-500">Message field is required</p>
        )}
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default UserResponseForm;
