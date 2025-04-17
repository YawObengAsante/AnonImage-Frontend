import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";
import { useLocation } from "react-router-dom";
import {NAV_LINKS, NAV_INACTIVE, NAV_ACTIVE} from '@/lib/constants'

export default function NavBar() {
  const location = useLocation()

  return (
    <div className="w-full px-5 h-[60px] flex justify-between items-center">
      <div className="flex items-center justify-between w-xl gap-x-7">
        <Link to="/">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text cursor-pointer">
            AnonImage
          </h1>
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-7 font-bold">
            {NAV_LINKS.map((link) => (
              <span key={link.name} className={`${location.pathname === link.path ? NAV_ACTIVE : NAV_INACTIVE}`}>
                <li >
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
        <Button className="bg-blue-500 text-white font-bold rounded-full cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-500">
          Get Started
        </Button>
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
