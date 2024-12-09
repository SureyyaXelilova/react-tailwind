import { navItems } from "../constants";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const MobileNavbar = () => {
  return (
    <div className="sticky fixed right-0 z-50 backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center lg:hidden">
      <ul className="dark:text-white">
        {navItems.map((item, index) => (
          <li key={index} className="py-4">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex space-x-6">
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
    </div>
  );
};
