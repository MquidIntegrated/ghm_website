import React from "react";
import logo from "../assets/svg/ghm-footer-logo.svg";
import cross from "../assets/svg/footer-cross.svg";
import address from "../assets/svg/address.svg";
import email from "../assets/svg/sms.svg";
import phone from "../assets/svg/phone.svg";
import facebook from "../assets/svg/facebook.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import x from "../assets/svg/x.svg";
import instagram from "../assets/svg/instagram.svg";
import FooterMenu from "./FooterMenu";

const socialIcons = [
  {
    icon: facebook,
    link: "#",
  },
  {
    icon: whatsapp,
    link: "#",
  },
  {
    icon: x,
    link: "#",
  },
  {
    icon: instagram,
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="ghm-container py-10 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
      {/* logo and text */}
      <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
        <div>
          <img
            src={logo}
            alt="grooming health management logo"
            className="mb-7 mx-auto md:mx-0"
          />
          <p className="ghm-text-gradient mb-6 md:mb-0">
            As a reputable HMO, we are committed to delivering high-quality
            Health Insurance that prioritize the well-being of our clients.
          </p>
        </div>
        <div className="hidden md:block">
          <img src={cross} alt="footer cross" />
        </div>
      </div>

      {/* reach us at */}
      <div className="text-left">
        <h3 className="text-ghmBlack font-medium text-2xl md:text-3xl mb-6">
          Reach Us At
        </h3>

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

      {/* our links */}
      <div className="*:mb-6 text-left">
        <h3 className="text-ghmBlack font-medium text-2xl md:text-3xl mb-6">
          Our Links
        </h3>

        {/* footer menu */}
        <div className="mb-8">
          <FooterMenu />
        </div>

        {/* socials */}
        <h3 className="text-ghmBlack font-medium text-2xl md:text-3xl mb-6">
          Socials
        </h3>
        <div className="flex justify-start space-x-6">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.link}
            >
              <img src={icon.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
