import { Button } from "@/components/ui/button";

import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { NAV_LINKS, NAV_INACTIVE, NAV_ACTIVE } from "@/lib/constants";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function MobileNav() {
  let user = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/log-in";
  };

  return (
    <Sheet>
      <SheetTrigger>
        <CgMenuRightAlt />
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col items-center mt-10 gap-7 font-bold">
        <li>
            <Link to="/">Home</Link>
          </li>
          {NAV_LINKS.map((link) => (
            <span
              key={link.name}
              className={`${
                location.pathname === link.path ? NAV_ACTIVE : NAV_INACTIVE
              }`}
            >
              <li>
                <Link to={link.path}>{link.name}</Link>
              </li>
            </span>
          ))}
          <li>
          {user ? (
          <Link onClick={handleLogout}>
            <Button className="cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-500">
              Log Out
            </Button>
          </Link>
        ) : (
          <Link to="/log-in">
            <Button className="cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-500">
              Log In
            </Button>
          </Link>
        )}
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
