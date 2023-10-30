import UserLoginForm from "@/components/UserLoginForm";
import Link from "next/link";

const SigninPage = () => {
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div className="max-w-sm mx-auto">
        <div className="mb-4">
          <h2 className="heading2">Login to account</h2>
          <p>Please fill out the form to login your account</p>
        </div>
        <UserLoginForm />
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
