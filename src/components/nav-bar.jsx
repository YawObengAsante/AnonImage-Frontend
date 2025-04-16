import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";

const NAVLINKS = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Images",
    path: "/image",
  },
];

export default function NavBar() {
  return (
    <div className="w-full px-5 h-[60px] flex justify-between items-center">
      <div className="flex items-center justify-between w-xl gap-x-7">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text cursor-pointer">AnonImage</h1>
        <div className="hidden md:block">
          <ul className="flex gap-7 font-bold">
            {NAVLINKS.map((link) => (
              <span className="relative inline-block before:absolute before:top-6 before:h-1 before:bg-black before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:duration-300">
                <li>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              </span>
            ))}
          </ul>
        </div>
      </div>
      <div className="gap-3 hidden md:flex">
        <Button className="cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-500">
          Log In
        </Button>
        <Button className="bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-400 transition-all ease-in-out duration-500">
          Get Started
        </Button>
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
