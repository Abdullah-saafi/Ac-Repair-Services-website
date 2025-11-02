import trust from "../assets/images/trust.png";
import lowPrice from "../assets/images/lowPrice.png";
import support24 from "../assets/images/support24.png";
import feature from "../assets/images/feature.jpg";

const Whyus = () => {
  const reasons = [
    {
      icon: trust,
      name: "Trusted Service Center",
      description:
        "We are a trusted service center providing reliable cooling and heating solutions. Our expert team ensures quality repairs, maintenance, and complete customer satisfaction."
    },
    {
      icon: lowPrice,
      name: "Reasonable Price",
      description:
        "We offer top-quality AC repair and maintenance services at affordable rates. Our pricing is transparent, fair, and designed to fit every customer's budget."
    },
    {
      icon: support24,
      name: "24/7 Support",
      description:
        "Our expert team is available 24/7 to assist you with any cooling or heating issues. We ensure quick and reliable support whenever you need it most."
    }
  ];

  return (
    <div className="flex flex-col md:flex-row  justify-between gap-10 p-10  md:p-30 ">
      <div className="md:w-[50%]">
        <div className="my-10">
          <h1 className="text-3xl font-bold mb-6">
            Few Reasons Why People Choose Us!
          </h1>
          <p className="text-gray-500 ">
            People trust us for our reliable, affordable, and high-quality AC
            repair services. Our skilled technicians ensure quick solutions and
            lasting comfort for every customer.
          </p>
        </div>

        {reasons.map((item, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="bg-primary rounded-full p-3 flex-shrink-0">
              <img src={item.icon} alt={item.name} className="w-10 h-10" />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:w-[50%]">
        <img
          src={feature}
          alt="AC Service Feature"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Whyus;
