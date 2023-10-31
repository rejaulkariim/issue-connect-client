"use client";
import { RootState } from "@/store/store";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import UserAccount from "../UserAccount";
import { Button } from "../ui/button";

const Navbar = () => {
  const user = useSelector((state: RootState) => state?.user?.user?.user);

  return (
    <header className="bg-background max-w-5xl mx-auto h-16 w-full flex justify-between items-center px-4 md:px-0 sticky top-0 z-50">
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

              <li className="cursor-pointer text-foreground">
                <IoMdNotificationsOutline
                  size={25}
                  className="text-foreground"
                />
              </li>

              <UserAccount />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
