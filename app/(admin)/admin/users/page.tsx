"use client";
import useFetchUser from "@/hooks/useUserFetch";

const UserPage = () => {
  const { users } = useFetchUser();

  const userColors = [
    "bg-rose-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
  ];

  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <h2 className="heading2">All Users</h2>
      <p className="paragraph">All users who have created account</p>

      <div className="my-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        {users?.map((user: any, index: number) => (
          <div
            key={user._id}
            className="p-4 border-2 border-muted rounded-2xl shadow-md hover:shadow-primary cursor-pointer"
          >
            <div className="space-y-1">
              <div
                className={`h-10 w-10 rounded-full  ${
                  userColors[index % userColors.length]
                } flex items-center justify-center`}
              >
                <p className="text-lg text-white font-bold uppercase">
                  {user?.name[0]}
                </p>
              </div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.location}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserPage;
