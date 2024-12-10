import {useState} from "react";
import arrow from "../assets/svg/dropdown-arrow.svg";

interface MenuItem {
  label: string;
  dropdown?: string[];
}

const menuItems: MenuItem[] = [
  {label: "About GH"},
  {label: "Providers", dropdown: ["Find a Provider", "Become a Provider"]},
  {label: "Health Plans", dropdown: ["Individual Plans", "Corporate Plans"]},
  {label: "Contact"},
];

const FooterMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="w-64">
      <ul className="space-y-4">
        {menuItems.map(item => (
          <li key={item.label} className="relative">
            <button
              onClick={() => toggleDropdown(item.label)}
              className="flex justify-between items-center text-lg text-left text-gray-700 hover:text-black font-normal focus:outline-none"
            >
              {item.label}
              {item.dropdown && (
                <span className={`pl-3`}>
                  <img src={arrow} alt="" />
                </span>
              )}
            </button>
            {item.dropdown && openDropdown === item.label && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-md w-48 z-10">
                {item.dropdown.map(dropdownItem => (
                  <li
                    key={dropdownItem}
                    className="px-2 py-2 text-ghmGrey-800 hover:bg-gray-100 cursor-pointer"
                  >
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
