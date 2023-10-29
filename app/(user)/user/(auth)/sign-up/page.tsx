"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  location: string;
  password: string;
};

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // Submit handler
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div className="max-w-sm mx-auto">
        <h2 className="heading2">Create an account</h2>
        <p>Please fill out the form to create an account</p>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500">Name field is required</p>
            )}
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
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password field is required</p>
            )}
          </div>

          <div className="mt-4">
            <Button type="submit">Sign up</Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <span>
              <Link href="/user/sign-in">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
