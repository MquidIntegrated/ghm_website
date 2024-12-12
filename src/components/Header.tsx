import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import whiteLogo from "../assets/svg/ghm-logo-white.svg";
import colorLogo from "../assets/svg/ghm-logo-color.svg";
import FooterMenu from "./FooterMenu";
import closeIcon from "../assets/svg/closeIcon.svg";
import address from "../assets/svg/address.svg";
import email from "../assets/svg/sms.svg";
import phone from "../assets/svg/phone.svg";
import hamburger from "../assets/svg/hamburger.svg";
import hamburgerWhite from "../assets/svg/hamburgerWhite.svg";

const Header: React.FC<{isHomePage: boolean}> = ({isHomePage}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    console.log(isScrolled);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={` ${
        !isHomePage ? "block" : "absolute"
      } top-0 left-0 w-full z-50 ${
        isHomePage && !isMobileMenuOpen ? "bg-transparent" : "bg-white "
      }`}
    >
      <div className="ghm-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img
              src={isHomePage && !isMobileMenuOpen ? whiteLogo : colorLogo}
              alt=""
            />
          </Link>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-6">
            {/* nav links */}
            <nav
              className={`hidden md:flex space-x-6 ${
                isHomePage ? "text-white" : "text-ghmGrey-700"
              }`}
            >
              <Link to="about" className="hover:text-ghmPurple-500 ">
                About GH
              </Link>
              {/* providers */}
              <div className="relative group hover:text-ghmPurple-500">
                <button className=" flex items-center">
                  Providers
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute z-50 left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100">
                  <Link
                    to="/providers-list"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    List of Providers
                  </Link>
                  <Link
                    to="/join-provider-network"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Join Provider Network
                  </Link>
                </div>
              </div>
              {/* health plans */}
              <div className="relative group hover:text-ghmPurple-500">
                <Link to="plans" className="flex items-center">
                  Health Plans
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute z-50 left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100">
                  <Link
                    to="/plans/retail"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Retail Plans
                  </Link>
                  <Link
                    to="/plans/student"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Student Plans
                  </Link>
                  <Link
                    to="/plans/corporate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Corporate Plans
                  </Link>
                </div>
              </div>
              {/* contact */}
              <Link to="/contact" className="hover:text-ghmPurple-500">
                Contact
              </Link>
            </nav>

            {/* get a quote button  */}
            <button
              className={`${
                isHomePage
                  ? "bg-white hover:bg-ghmPurple-300 hover:text-white "
                  : "bg-ghmPurple-300 text-white hover:text-ghmGrey-700 hover:bg-white border hover:border-ghmPurple-300"
              } rounded-full hidden md:block px-6 py-3 cursor-pointer transition delay-150 `}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {(isHomePage && !isMobileMenuOpen && (
              <img src={hamburgerWhite} alt="" className="w-6 h-6" />
            )) ||
              (!isHomePage && !isMobileMenuOpen && (
                <img src={hamburger} alt="" className="w-6 h-6" />
              )) ||
              (isMobileMenuOpen && (
                <img src={closeIcon} alt="" className="w-6 h-6" />
              ))}

            {/* <img
              src={isHomePage && !isMobileMenuOpen ? hamburger : closeIcon}
              alt=""
              className="w-6 h-6"
            /> */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute z-50 h-screen w-full bg-white p-4 border-t shadow-md">
          <FooterMenu onNavigate={closeMenu} />
          <div className="mt-6">
            <Link
              to="/quote"
              className="block w-full text-center bg-ghmPurple-300 text-white py-2 rounded-full"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
            <div className="mt-4 text-sm text-gray-700">
              {/* our office */}
              <div className="mb-6">
                <h4 className="ghm-text-gradient mb-2 text-xl">Our Office</h4>
                <div className="flex justify-start space-x-3">
                  <img src={address} alt="" className="self-start mt-1" />
                  <p className="text-ghmGrey-800 max-w-xs">
                    120 Ikotun-Egbe Road, Iyana Ejigbo, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              {/* our email */}
              <div className="mb-6">
                <h4 className="ghm-text-gradient mb-2 text-xl">Our Email</h4>
                <div className="flex justify-start space-x-3">
                  <img src={email} alt="" />
                  <p className="text-ghmGrey-800">info@groominghm.com</p>
                </div>
              </div>

              {/* our phones */}
              <div>
                <h4 className="ghm-text-gradient mb-2 text-xl">Our Phones</h4>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex justify-center md:justify-start space-x-3">
                    <img src={phone} alt="" />
                    <p className="text-ghmGrey-800">+234 908 796 6270</p>
                  </div>
                  <div className="flex justify-center md:justify-start space-x-3">
                    <img src={phone} alt="" />
                    <p className="text-ghmGrey-800">+234 908 796 6271</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
