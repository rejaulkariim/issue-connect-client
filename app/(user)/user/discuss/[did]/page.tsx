"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
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

      {/* Chat box */}
      <div className="border my-10 px-3 md:px-10 py-4 rounded-xl overflow-auto">
        <div>
          {/* User response */}
          <div className="border-b pb-4">
            <h2 className="heading2">
              Founder of PodStash.ai basically an on-demand Blinkist for the
              internet
            </h2>

            <div className="flex items-center gap-2 my-2">
              <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
                <p className="text-white">U</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm">Jhon Doe</p>
                <p className="text-sm">12-2-2023</p>
              </div>
            </div>

            <p>
              Just launched a few weeks ago, already have 200 customers, so
              clearly I hit a nerve. Excited to talk to more customers and
              continuing to add features.
            </p>

            <div className="flex items-center gap-2">
              <AiOutlineHeart size={25} className="text-rose-500" />
            </div>
          </div>

          {/* Admin response */}
          <div className="mt-6 border-b pb-4">
            <div className="flex justify-end items-center gap-2 my-2">
              <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
                <p className="text-white">A</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm">Rejaul</p>
                <p className="text-sm">12-2-2023</p>
              </div>
            </div>

            <p>
              Just launched a few weeks ago, already have 200 customers, so
              clearly I hit a nerve. Excited to talk to more customers and
              continuing to add features.
            </p>
          </div>

          {/* User response */}
          <div className="mt-6 border-b pb-4">
            <div className="flex items-center gap-2 my-2">
              <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
                <p className="text-white">U</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm">Jhon Doe</p>
                <p className="text-sm">12-2-2023</p>
              </div>
            </div>

            <p>
              Just launched a few weeks ago, already have 200 customers, so
              clearly I hit a nerve. Excited to talk to more customers and
              continuing to add features.
            </p>
          </div>
        </div>

        {/* Admin response */}
        <div className="mt-6 border-b pb-4">
          <div className="flex justify-end items-center gap-2 my-2">
            <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
              <p className="text-white">A</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm">Rejaul</p>
              <p className="text-sm">12-2-2023</p>
            </div>
          </div>

          <p>
            Just launched a few weeks ago, already have 200 customers, so
            clearly I hit a nerve. Excited to talk to more customers and
            continuing to add features.
          </p>
        </div>

        {/* Admin response */}
        <div className="mt-6 border-b pb-4">
          <div className="flex justify-end items-center gap-2 my-2">
            <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
              <p className="text-white">A</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm">Rejaul</p>
              <p className="text-sm">12-2-2023</p>
            </div>
          </div>

          <p>
            Just launched a few weeks ago, already have 200 customers, so
            clearly I hit a nerve. Excited to talk to more customers and
            continuing to add features.
          </p>
        </div>

        {/* Admin response */}
        <div className="mt-6 border-b pb-4">
          <div className="flex justify-end items-center gap-2 my-2">
            <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
              <p className="text-white">A</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm">Rejaul</p>
              <p className="text-sm">12-2-2023</p>
            </div>
          </div>

          <p>
            Just launched a few weeks ago, already have 200 customers, so
            clearly I hit a nerve. Excited to talk to more customers and
            continuing to add features.
          </p>
        </div>

        {/* Chat form */}
        <form className="space-y-4 mt-4">
          <Textarea placeholder="Write a message" />
          <Button onClick={() => router.back()} variant="default">
            Send
          </Button>
        </form>
      </div>
    </main>
  );
};

export default DiscussDetailsPage;
