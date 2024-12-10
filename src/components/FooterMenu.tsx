import {useState} from "react";
import arrow from "../assets/svg/dropdown-arrow.svg";
import {Link} from "react-router-dom";

interface MenuItem {
  label: string;
  to?: string; // Optional "to" for the main menu item
  dropdown?: {label: string; to: string}[]; // Dropdown items with labels and "to"
}
const menuItems: MenuItem[] = [
  {label: "About GH", to: "about"},
  {
    label: "Providers",
    to: "/providers-list",
    dropdown: [
      {label: "List of Providers", to: "/providers-list"},
      {label: "Join Provider Network", to: "/providers-join"},
    ],
  },
  {
    label: "Health Plans",
    to: "plans",
    dropdown: [
      {label: "Retail Plans", to: "/plans/retail"},
      {label: "Student Plans", to: "/plans/student"},
      {label: "Corporate Plans", to: "/plans/corporate"},
    ],
  },
  {label: "Contact", to: "/contact"},
];

const FooterMenu: React.FC<{onNavigate?: () => void}> = ({onNavigate}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="w-64">
      <ul className="space-y-4">
        {menuItems.map(item => (
          <li key={item.label} className="relative">
            <div className="flex gap-x-4 items-center">
              <Link
                to={item.to || "#"}
                className="text-lg text-left text-gray-700 hover:text-black font-normal focus:outline-none"
                onClick={onNavigate}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center focus:outline-none"
                >
                  <img src={arrow} alt="Toggle Dropdown" className="pl-3" />
                </button>
              )}
            </div>
            {item.dropdown && openDropdown === item.label && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-md w-48 z-10">
                {item.dropdown.map(dropdownItem => (
                  <li key={dropdownItem.label}>
                    <Link
                      to={dropdownItem.to}
                      className="block px-2 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={onNavigate}
                    >
                      {dropdownItem.label}
                    </Link>
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
