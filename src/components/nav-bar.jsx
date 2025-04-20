import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";
import { useLocation } from "react-router-dom";
import { NAV_LINKS, NAV_INACTIVE, NAV_ACTIVE } from "@/lib/constants";

export default function NavBar() {
  const location = useLocation();
  // to help access if the user has been logged in
  let user = localStorage.getItem("access_token");
  // to handle the logout functionality
  const handleLogout = () => {
    let user = localStorage.setItem("access_token", "");
    navigate("/");
  };

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
              <span
                key={link.name}
                className={`${
                  location.pathname === link.path ? NAV_ACTIVE : NAV_INACTIVE
                }`}
              >
                <li>
                  <Link to={link.path}>{link.name}</Link>
                </li>

                {/* The block of code checks below to see if the user has logged in. 
                  The images link will not navlink will not show if the user has not logged in.
                  so we are getting the access token and it is being stored in user. so if user variable is true then it means the current user has logged in
                
                 */}

                {/* {
                   link.path=="/image" ?
                   <li>
                    {user ? <Link to={link.path}>{link.name}</Link> : ""}
                  </li> 
                    :
                    <li>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                } */}

                {/* end of the code checking if the user has logged in */}
              </span>
            ))}
          </ul>
        </div>
      </div>
      <div className="gap-3 hidden md:flex">
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
        <Link to="/dashboard">
          <Button className="bg-blue-500 text-white font-bold rounded-full cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-500">
            Get Started
          </Button>
        </Link>
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
