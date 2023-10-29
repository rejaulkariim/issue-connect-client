import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div className="max-w-sm mx-auto">
        <h2 className="heading2">Create an account</h2>
        <p>Please fill out the form to create an account</p>
        <form className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Location" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" />
          </div>

          <div className="mt-4">
            <Button type="submit">Submit</Button>
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
