
import { FaAward, FaUserGear } from "react-icons/fa6";
import { IoCallSharp, } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import intro01 from "../assets/images/intro01.jpg"
import intro2 from "../assets/images/intro2.jpg"
import intro3 from "../assets/images/intro3.jpg"
import intro4 from "../assets/images/intro4.jpg"



const IntroSection = () => {

  const services = [
    { icon: <FaUserGear />, name: "Expert Technician" },
    { icon: <FaAward />, name: "Best Quality Services" }
  ]
  const contacts = [
    { icon: <IoCallSharp />, name: "+923132388723" },
    { icon: <MdEmail />, name: "Abdullahsaaafipro@gmail.com" }
  ]
  return <>
    <div className="md:flex  p-5 sm:p-10 md:p-20  ">
      <div className="IntroText md:w-[50%]  ">
        <h1 className="font-bold text-4xl py-10 ">Welcome To Best Cooling & Heating Service Center</h1>
        <div className="sm:flex justify-between">
          {services.map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="text-primary text-5xl">{service.icon}</span>
              <h1 className="text-md font-bold  mx-2">{service.name}</h1>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mt-4 border-b border-gray-300 pb-4 ">Experience top-notch AC repair and maintenance services with our expert technicians dedicated to keeping your home cool and comfortable.</p>
        <div className="md:flex justify-between">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center">
              <span className="text-primary text-4xl ">{contact.icon}</span>
              <h1 className="text-md font-bold  mx-2 ">{contact.name}</h1>
            </div>
          ))}
        </div>
      </div >
      <div className="IntroImg md:w-[50%] grid grid-cols-2 gap-4 sm:gap-6 md:m-10 mt-10 ">
        <img src={intro01} alt="" className="h-[70%] justify-self-end self-end rounded-lg" />
        <img src={intro2} alt="" className="rounded-lg" />
        <img src={intro3} alt="" className="h-[50%] w-[50%] justify-self-end self-start rounded-lg" />
        <img src={intro4} alt="" className="h-[70%] w-[60%] justify-self-start rounded-lg" />



      </div>
    </div >
  </>

}

export default IntroSection