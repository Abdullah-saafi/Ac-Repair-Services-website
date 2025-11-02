import { MdArrowForwardIos } from "react-icons/md";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const footerNav = [
    {
      head: "Get In Touch",
      links: ["123 Street, New York, USA", "+012 345 67890", "info@example.com"]
    },
    {
      head: "Our Services",
      links: ["AC Installation", "AC Repair", "Maintenance", "Duct Cleaning"]
    },
    {
      head: "Quick Links",
      links: ["About Us", "Contact", "Our Services", "Privacy Policy"]
    },
    {
      head: "Follow Us",
      links: ["Facebook", "Instagram", "LinkedIn", "Twitter"]
    }
  ];

  return (
    <footer className="bg-[#01082B] text-white py-16 px-10 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row items-start justify-between w-full md:space-x-10 my-10">
        <div className="space-y-5 md:w-1/2">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="AirCone Logo" className="bg-white size-20 rounded-full" />
            <h1 className="text-4xl font-bold">AirCone</h1>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Providing reliable cooling and heating solutions with quality you can trust.
            Your comfort is our top priority — anytime, anywhere.
          </p>
        </div>

        <div className="space-y-5 md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-2xl font-bold">Newsletter</h1>
          <p className="text-gray-400">
            Stay updated with our latest offers, tips, and service updates — subscribe to our newsletter!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="p-3 w-full rounded-l-lg  bg-white text-black"
            />
            <button className="bg-primary px-5 rounded-r-lg font-semibold hover:bg-primary/80 transition">
              Signup
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full">
        {footerNav.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{section.head}</h2>
            <ul className="space-y-1 text-gray-400">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-primary cursor-pointer transition flex items-center"
                >

                  {(index === 1 || index === 2) && (
                    <MdArrowForwardIos className="mr-2 text-primary" />
                  )}
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className=" md:flex  items-center  justify-between text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm w-full">
        <p> © {new Date().getFullYear()} CoolTech — All Rights Reserved.</p>
        <h6>Designed By <span className="text-primary text-xl">Abdullah Saafi</span></h6>
      </div>
    </footer>
  );
};

export default Footer;
