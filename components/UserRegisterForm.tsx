"use client";

import { useAxiosPost } from "@/hooks/useAxiosPost";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "./Loading";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "./ui/use-toast";

type Inputs = {
  name: string;
  email: string;
  location: string;
  password: string;
};

const UserRegisterForm = () => {
  const router = useRouter();
  // Hooks
  const { axiosPost, isLoading, error } = useAxiosPost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // Submit handler
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axiosPost("/api/users/auth/register", { ...data });

    console.log("🔥", res);

    if (res) {
      router.push("/user/discuss");
      toast({ title: "Success🔥", description: "Account has been created" });
    }
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-500">Name field is required</p>}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500">Email field is required</p>
        )}
      </div>

      {/* Location */}
      <div className="space-y-1">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Location"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <p className="text-red-500">Location field is required</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-red-500">Password field is required</p>
        )}
      </div>

      <div className="mt-4">
        <Button type="submit" className="uppercase">
          {isLoading ? (
            <>
              <Loading />
              Signing up
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </div>

      <div className="mt-4">
        {error && (
          <p className="bg-rose-500/20 rounded-lg p-3 border w-full border-red-500 text-sm">
            {error}
          </p>
        )}
      </div>
    </form>
  );
};

export default UserRegisterForm;
