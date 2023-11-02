"use client";
import AdminResponseForm from "@/components/AdminResponseForm";
import { Button } from "@/components/ui/button";
import useSingleTopicFetch from "@/hooks/useSingleTopicFetch";
import { formatedDate } from "@/lib/formateDate";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

const MessageDetailsPage = ({ params }: { params: { mid: string } }) => {
  const router = useRouter();

  const { topic, isLoading, refetch } = useSingleTopicFetch({
    params: params.mid,
  });
  const user = useSelector((state: RootState) => state?.user?.user);

  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div>
        <Button
          onClick={() => router.back()}
          variant="destructive"
          size="sm"
          className="rounded-full"
        >
          <IoIosArrowBack />
        </Button>
      </div>

      {/* Chat box */}
      <div className="border-2 border-muted my-10 px-3 md:px-6 py-4 rounded-xl overflow-auto">
        {/* User response */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 my-2">
            <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
              <p className="text-white">{user?.user.name[0]}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm">{user?.user?.name}</p>
              <p className="text-sm">{formatedDate(topic?.createdAt)}</p>
            </div>
          </div>
          <div>
            <h2 className="heading3">{topic?.title}</h2>
            <p className="paragraph">{topic?.subject}</p>
          </div>
        </div>

        {topic.responses?.map((item: any) => (
          <div className="border-b pb-4" key={item._id}>
            <div className="flex items-center gap-2 my-2">
              <div className="h-8 w-8 border-2 rounded-full bg-[#075571] flex justify-center items-center">
                <p className="text-white">{item.user.name[0]}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm">{item.user.name}</p>
                <p className="text-sm">{formatedDate(topic?.createdAt)}</p>
              </div>
            </div>
            <div>
              <p className="paragraph">{item.content}</p>
            </div>
          </div>
        ))}

        <AdminResponseForm topicId={params.mid} refetch={refetch} />
      </div>
    </main>
  );
};

export default MessageDetailsPage;
