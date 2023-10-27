"use client";

import { BsChat } from "react-icons/bs";

const UserDiscussPage = () => {
  return (
    <main className="wrapper section-padding">
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold text-[#075571]">
          Issue Discussion
        </h1>
      </div>

      {/* Chats Discussion */}

      <div className="section-padding">
        <ul className="flex flex-col gap-4">
          <li className="h-full w-full cursor-pointer border-2 border-[#075571] rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overfloww-hidden">
            <div className="px-10 py-4 text-[#075571] flex items-center gap-4 ">
              <div className="">
                <h2 className="text-xl font-semibold">
                  How to install next js 14?
                </h2>
                <p>
                  You can install the latest next js 14 by using npx
                  create-next-app@latest command
                </p>
              </div>
              <div>
                <BsChat size={20} />
              </div>
            </div>
          </li>
          <li className="h-full w-full cursor-pointer border-2 border-[#075571] rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overfloww-hidden">
            <div className="px-10 py-4 text-[#075571] flex items-center gap-4 ">
              <div className="">
                <h2 className="text-xl font-semibold">
                  How to install next js 14?
                </h2>
                <p>
                  You can install the latest next js 14 by using npx
                  create-next-app@latest command
                </p>
              </div>
              <div>
                <BsChat size={20} />
              </div>
            </div>
          </li>
          <li className="h-full w-full cursor-pointer border-2 border-[#075571] rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overfloww-hidden">
            <div className="px-10 py-4 text-[#075571] flex items-center gap-4 ">
              <div className="">
                <h2 className="text-xl font-semibold">
                  How to install next js 14?
                </h2>
                <p>
                  You can install the latest next js 14 by using npx
                  create-next-app@latest command
                </p>
              </div>
              <div>
                <BsChat size={20} />
              </div>
            </div>
          </li>
          <li className="h-full w-full cursor-pointer border-2 border-[#075571] rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overfloww-hidden">
            <div className="px-10 py-4 text-[#075571] flex items-center gap-4 ">
              <div className="">
                <h2 className="text-xl font-semibold">
                  How to install next js 14?
                </h2>
                <p>
                  You can install the latest next js 14 by using npx
                  create-next-app@latest command
                </p>
              </div>
              <div>
                <BsChat size={20} />
              </div>
            </div>
          </li>
          <li className="h-full w-full cursor-pointer border-2 border-[#075571] rounded-2xl shadow-md hover:shadow-[#075571] transition-colors duration-300 overfloww-hidden">
            <div className="px-10 py-4 text-[#075571] flex items-center gap-4 ">
              <div className="">
                <h2 className="text-xl font-semibold">
                  How to install next js 14?
                </h2>
                <p>
                  You can install the latest next js 14 by using npx
                  create-next-app@latest command
                </p>
              </div>
              <div>
                <BsChat size={20} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default UserDiscussPage;
