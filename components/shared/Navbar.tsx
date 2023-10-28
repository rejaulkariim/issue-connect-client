import Link from "next/link";
import { GrNotification } from "react-icons/gr";
import { Button } from "../ui/button";

const Navbar = () => {
  const user = false;
  return (
    <header className="max-w-5xl mx-auto h-16 w-full flex justify-between items-center px-4 md:px-0 sticky top-0 z-50">
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
          <li>
            <Link href="/user/discuss">Discussions</Link>
          </li>

          <li className="cursor-pointer">
            <GrNotification size={25} />
          </li>

          {!user ? (
            <li>
              <Link href="/user/sign-in">
                <Button>Sign in</Button>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/user/logout">
                <Button>Logout</Button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
