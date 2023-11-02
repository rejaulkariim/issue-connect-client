"use client";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import Notification from "../Notification";
import UserAccount from "../UserAccount";
import { Button } from "../ui/button";

const Navbar = () => {
  const user = useSelector((state: RootState) => state?.user?.user?.user);

  return (
    <header className="bg-background max-w-5xl mx-auto h-16 w-full flex justify-between items-center px-4  sticky top-0 z-50">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <h2 className="heading2 tracking-wide">
                Trackr
                <span className="text-primary text-2xl">.</span>
              </h2>
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center gap-4 md:gap-8">
          {!user ? (
            <li>
              <Link href="/user/sign-in">
                <Button className="uppercase">Sign in</Button>
              </Link>
            </li>
          ) : (
            <>
              {user?.role === "admin" ? (
                <>
                  <li>
                    <Link href="/admin/messages">Messages</Link>
                  </li>
                  <li>
                    <Link href="/admin/users">Users</Link>
                  </li>
                  <li>
                    <Notification />
                  </li>
                </>
              ) : (
                <li>
                  <Link href="/user/discuss">Discussions</Link>
                </li>
              )}

              <UserAccount />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
