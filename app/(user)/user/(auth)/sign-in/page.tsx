import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SigninPage = () => {
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div className="max-w-sm mx-auto">
        <h2 className="heading2">Login to account</h2>
        <p>Please fill out the form to login your account</p>
        <form className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" />
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
