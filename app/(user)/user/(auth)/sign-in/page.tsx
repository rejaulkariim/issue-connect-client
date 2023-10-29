"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const SigninPage = () => {
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
        <div className="mb-4">
          <h2 className="heading2">Login to account</h2>
          <p>Please fill out the form to login your account</p>
        </div>

        {/* Form */}
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
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

          {/* Password */}
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">Email field is required</p>
            )}
          </div>

          <div className="mt-4">
            <Button type="submit">Login</Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            Do not have account yet?{" "}
            <span>
              <Link href="/user/sign-up">Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
