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
            <Link to="/log-in">Log In</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
