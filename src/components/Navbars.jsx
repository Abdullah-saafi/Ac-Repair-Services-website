import { useState } from "react";
import {
  IoCall,
  IoMail,
  IoLogoWhatsapp,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import logo from "../assets/images/logo.png";

const Navbars = () => {

  const miniNav = ["Home /", "Term /", "Privacy /", "Support /"];

  const MainNav = ["Home", "About Us", "Services", "Pages", "Contact Us"];

  const SocialNav = [
    { icon: <IoLogoFacebook />, link: "https://facebook.com" },
    { icon: <IoLogoInstagram />, link: "https://instagram.com" },
    { icon: <IoLogoWhatsapp />, link: "https://whatsapp.com" },
    { icon: <IoLogoTwitter />, link: "https://twitter.com" },
  ];

  const [sideBar, SetSidebar] = useState(false)
  const MenuClick = () => {
    SetSidebar(true)
  }
  const CloseIcon = () => {
    SetSidebar(false)
  }

  return (
    < >
      <div className="relative">
        <div className="miniNav bg-secondary text-white px-2 py-2 hidden sm:flex justify-between">
          <div className="flex">
            <p className="flex items-center text-xs cursor-pointer">
              <IoCall className="text-primary mx-1" /> +923132388723
            </p>
            <p className="flex items-center text-xs mx-2 cursor-pointer">
              <IoMail className="text-primary mx-1" /> Abdullahsaafipro@gmail.com
            </p>
          </div>
          <div>
            <ul className="flex text-sm">
              {miniNav.map((item, i) => (
                <li
                  key={i}
                  className="mx-2 hover:text-primary cursor-pointer transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mainNav fixed w-screen z-100 sm:relative  flex items-center justify-between px-5 py-4 bg-white shadow-sm ">
          <div className="logo flex items-center space-x-2 cursor-pointer ">
            <img src={logo} alt="Logo " className="size-10 sm:size-12" />
            <h1 className="font-bold text-2xl">AirCone</h1>
          </div>

          <div className="CenterNav hidden sm:block">
            <ul className="flex">
              {MainNav.map((items, i) => (
                <li
                  key={i}
                  className="mx-3 hover:text-primary cursor-pointer transition-colors duration-300"
                >
                  {items}
                </li>
              ))}
            </ul>
          </div>

          <div className="SocialNav hidden sm:block">
            <ul className="flex">
              {SocialNav.map((items, i) => (
                <li
                  key={i}
                  className="text-primary px-1 cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  <a href={items.link} target="_blank" rel="noreferrer">
                    {items.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="menuicon sm:hidden text-2xl text-primary">
            <IoMenu onClick={MenuClick} />
          </div>



        </div>
        {sideBar && (
          <div className="sideBar z-200 slide-in  px-8 py-4 bg-white shadow-sm sm:hidden  fixed top-6 right-1 " >
            <ul className=" ">
              <IoClose onClick={CloseIcon} className=" text-primary cursor-pointer justify-self-end text-2xl " />
              {MainNav.map((items, i) => (
                <li
                  key={i}
                  className="my-2 hover:text-primary cursor-pointer transition-colors duration-300"
                >
                  {items}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbars;
