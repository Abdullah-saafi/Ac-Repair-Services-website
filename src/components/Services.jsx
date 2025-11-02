import service1 from "../assets/images/service1.jpg"
import service2 from "../assets/images/service2.jpg"
import service3 from "../assets/images/service3.jpg"
import service4 from "../assets/images/service4.jpg"
import service5 from "../assets/images/service5.jpg"
import service6 from "../assets/images/service6.jpg"




import icon01light from "../assets/images/icon01light.png"
import icon02light from "../assets/images/icon02light.png"
import icon03light from "../assets/images/icon03light.png"
import icon04light from "../assets/images/icon04light.png"
import icon05light from "../assets/images/icon05light.png"
import icon06light from "../assets/images/icon06light.png"




const Services = () => {
  const services = [
    { img: service1, icon: icon01light, name: "AC Installation" },
    { img: service2, icon: icon02light, name: "Cooling Services" },
    { img: service3, icon: icon03light, name: "Heating Services" },
    { img: service4, icon: icon04light, name: "Maintenance & Repair" },
    { img: service5, icon: icon05light, name: "Indoor Air Quality" },
    { img: service6, icon: icon06light, name: "Annual Inspections" },


  ]
  return <>
    <div className="px-5 md:px-10 lg:px-30 py-20 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center py-10 ">We Provide professional Heating & Cooling Services</h1>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.img} alt="" />
            <div className="flex bg-gray-200">
              <div className="bg-primary  p-4">
                <img src={service.icon} alt="" />
              </div>
              <div className="p-5 md:text-xl md:text-2xl hover:text-primary cursor-pointer duration-300">
                <h2>{service.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default Services