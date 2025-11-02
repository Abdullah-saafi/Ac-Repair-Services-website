import team1 from "../assets/images/team1.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"
import team4 from "../assets/images/team4.jpg"


const technicians = [
  { img: team1, name: "Abdullah Saafi", role: "HVAC Installation Technician" },
  { img: team2, name: "Abdullah Aziz", role: "HVAC Maintenance Technician" },
  { img: team3, name: "Hayat Ullah", role: "HVAC Repair Technician" },
  { img: team4, name: "Abad Ullah", role: "Refrigeration Technician" },
];

const TeamSection = () => {
  return (
    <div className=" text-center my-20">
      <div className=""> <h1 className="text-2xl md:text-4xl font-bold">
        Meet Our Professional <br />
        Team Members
      </h1></div>
      <div className="p-6 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
        {technicians.map((tech, index) => (
          <div key={index} className=" group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img
              src={tech.img}
              alt={tech.name}
              className="w-full  object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="bg-gray-100 p-5 text-center">
              <h1 className="text-2xl font-bold">{tech.name}</h1>
              <p className="text-primary">{tech.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
