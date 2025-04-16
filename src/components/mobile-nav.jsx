import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

const NAVLINKS = [
  {
    name: "Dashboard",
    path: "/dashboard",
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


export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger><CgMenuRightAlt/></SheetTrigger>
      <SheetContent>
      <ul className="flex flex-col items-center mt-10 gap-7 font-bold">
            {NAVLINKS.map((link) => (
                <li className="hover:bg-blue-300 hover:text-white px-3">
                  <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
          </ul>
      </SheetContent>
    </Sheet>
  )
}
