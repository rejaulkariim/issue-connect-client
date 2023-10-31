"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/features/auth/userSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const UserAccount = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state?.user?.user?.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.push("/");
    toast({ title: "Success🎉", description: "You've logged out" });
  }, [dispatch, router]);

  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-10 w-10 rounded-full bg-rose-600 flex items-center justify-center">
          <p className="text-lg text-white font-bold"> {user?.name[0]}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 border-none">
        <DropdownMenuLabel>
          <p className="paragraph">{user?.name}</p>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <p className="paragraph">{user?.email}</p>
        </DropdownMenuLabel>
        <Button
          variant="default"
          size="sm"
          className="uppercase w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccount;
