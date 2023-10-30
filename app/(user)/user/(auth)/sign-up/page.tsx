import UserRegisterForm from "@/components/UserRegisterForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div className="max-w-sm mx-auto border-2 p-4 rounded-2xl">
        <h2 className="heading2">Create an account</h2>
        <p>Please fill out the form to create an account</p>
        <UserRegisterForm />

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
