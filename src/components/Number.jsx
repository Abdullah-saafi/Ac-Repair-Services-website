const Number = () => {
  const data = [
    { number: 1603, name: "Happy Clients" },
    { number: 1996, name: "Projects Succeed" },
    { number: 1012, name: "Awards Achieved" },
    { number: 1997, name: "Team Members" }
  ];

  return (
    <div
      className="relative bg-cover bg-center text-center py-16"
      style={{ backgroundImage: "url('/numberbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#01082B]/90"></div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10">
        {data.map((item, index) => (
          <div key={index}>
            <h1 className="text-white text-5xl sm:text-6xl font-bold">{item.number}</h1>
            <h2 className="text-primary text-lg font-semibold mt-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Number;
