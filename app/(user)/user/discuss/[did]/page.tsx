"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const DiscussDetailsPage = () => {
  const router = useRouter();
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div>
        <Button onClick={() => router.back()} variant="default">
          <IoIosArrowBack />
        </Button>
      </div>
      DiscussDetailsPage
    </main>
  );
};

export default DiscussDetailsPage;
