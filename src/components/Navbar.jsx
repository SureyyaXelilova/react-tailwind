import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileNavbar } from "./MobileNavbar";

export const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto  relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualVR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 dark:text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <ThemeSwitcher />
            <a href="#" className="py-2 px-3 border rounded-md dark:text-white">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md text-white"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end dark:text-white">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && <MobileNavbar />}
      </div>
    </nav>
  );
};
