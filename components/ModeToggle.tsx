"use client";

import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { RxMoon } from "react-icons/rx";
import { Button } from "./ui/button";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="link"
      className="h-10 w-10 px-0"
      onClick={handleThemeChange}
    >
      {theme === "light" ? (
        <>
          <RxMoon size={25} className="rotate-0 scale-100 text-foreground " />
        </>
      ) : (
        <>
          <BiSun size={25} className="rotate-0 scale-100 text-foreground " />
        </>
      )}
    </Button>
  );
};

export default ModeToggle;
