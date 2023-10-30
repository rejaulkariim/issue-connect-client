"use client";

import CreateTopicModal from "@/components/CreateTopicModal";
import useFetchTopics from "@/hooks/useTopicFetch";
import Link from "next/link";
import { BsChat } from "react-icons/bs";

const UserDiscussPage = () => {
  const { topics, isLoading } = useFetchTopics();

  console.log(topics);
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold text-[#075571]">
          Issue Discussion
        </h1>
      </div>

      {/* Chats Discussion */}
      <div className="section-padding">
        <div className="flex justify-between items-center px-2 py-4">
          <div>
            <h4 className="text-[#075571]">All Messages</h4>
          </div>
          <div>
            <CreateTopicModal />
          </div>
        </div>

        <ul className="flex flex-col gap-4">
          {topics.map((item: any) => (
            <Link key={item._id} href={`/user/discuss/${item._id}`}>
              <li className="h-full w-full cursor-pointer border-2 border-[#075571] rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overfloww-hidden">
                <div className="px-10 py-4 text-[#075571] flex justify-between items-center gap-4 ">
                  <div className="">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p>{item.message}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsChat size={20} />
                    <span>{item?.response?.length}</span>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default UserDiscussPage;
