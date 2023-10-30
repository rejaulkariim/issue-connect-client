"use client";
import { logout } from "@/features/auth/userSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { GrNotification } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const Navbar = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state?.user?.user?.user);

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.push("/");
    toast({ title: "Success🎉", description: "You've logged out" });
  }, [dispatch, router]);

  return (
    <header className="bg-white max-w-5xl mx-auto h-16 w-full flex justify-between items-center px-4 md:px-0 sticky top-0 z-50">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <h2 className="text-xl font-bold">Issues</h2>
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center gap-4">
          {!user ? (
            <li>
              <Link href="/user/sign-in">
                <Button className="uppercase">Sign in</Button>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/user/discuss">Discussions</Link>
              </li>

              <li className="cursor-pointer">
                <GrNotification size={25} />
              </li>
              <li onClick={handleLogout}>
                <Button className="uppercase">Logout</Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
