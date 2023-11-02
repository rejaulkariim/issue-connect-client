import ModeToggle from "../ModeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="wrapper py-6">
      <div className="flex justify-between gap-4 items-center">
        <p className="paragraph">
          &copy; {currentYear} Teackr. All rights reserved.
        </p>
        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
