"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center space-y-4">
      <h1 className="text-4xl font-bold text-[#075571]">
        404 Page not found🥺
      </h1>
      <Button onClick={() => router.back()}>Back to home</Button>
    </main>
  );
};

export default NotFoundPage;
