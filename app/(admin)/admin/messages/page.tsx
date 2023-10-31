"use client";

import useTopicFetchAdmin from "@/hooks/useTopicFetchAdmin";
import { formatedDate } from "@/lib/formateDate";
import Link from "next/link";
import { BsChat } from "react-icons/bs";

const userColors = [
  "bg-rose-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
];

const AdminDiscussPage = () => {
  const { topics } = useTopicFetchAdmin();
  console.log(topics);
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <h2 className="heading2">All requested Issues</h2>

      <div className="my-10">
        <ul className="flex flex-col gap-4">
          {topics.map((item: any, index: number) => (
            <Link key={item._id} href={`/admin/messages/${item._id}`}>
              <li className="h-full w-full cursor-pointer border-2 border-muted-muted rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overflow-hidden">
                <div className="px-8 py-4 text-foreground space-y-2 ">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div
                      className={`h-10 w-10 rounded-full  ${
                        userColors[index % userColors.length]
                      } flex items-center justify-center`}
                    >
                      <p className="text-lg text-white font-bold uppercase">
                        {item?.user?.name?.[0]}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Name: {item?.user?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Email: {item?.user?.email}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Location: {item?.user?.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatedDate(item?.createdAt)}
                    </p>
                  </div>

                  <div className="flex justify-between items-center gap-4 ">
                    <div className="">
                      <h2 className="heading3">{item.title}</h2>
                      <p className="text-muted-foreground">{item.message}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsChat size={20} />
                      <span>{item?.response?.length}</span>
                    </div>
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

export default AdminDiscussPage;
