import Link from "next/link";

const Navbar = () => {
  return (
    <header className="max-w-5xl mx-auto h-16 flex justify-between items-center px-4 md:px-0">
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
            <Link href="/user/discuss">Discuss</Link>
          </li>
          <li>
            <Link href="/">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
