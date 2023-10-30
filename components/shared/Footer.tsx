import ModeToggle from "../ModeToggle";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto py-6">
      <div className="flex justify-between gap-4 items-center">
        <p className="">All right reversed</p>

        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
