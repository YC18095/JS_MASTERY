import Link from "next/link";
import Image from "next/image";
import { Theme } from "./Theme";

const NavBar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 fixed z-50 w-full gap-6 p-6 
    shadow-light-300 dark:show-none sm:px-12"
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <span>Global Search</span>
      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default NavBar;
