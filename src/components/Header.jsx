
const HeroSection = () => {
  return <>
    <div className="relative bg-[url('/header.jpeg')] h-[50rem] w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center ">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="headerText relative  flex flex-col justify-center items-center px-10" >
        <h1 className=" text-3xl sm:text-6xl font-bold text-shadow-lg/20 flex flex-col items-center mb-3 ">We Provide Best <span className="text-primary text-4xl sm:text-7xl">  AC
          Repair <br /> </span> Services</h1>
        <p> Your comfort is our priority — fast and reliable AC solutions.
        </p>
        <p>We fix it right, the first time.</p>
        <div ><button className="btn bg-primary text-white rounded-full px-7 py-2 mt-3 cursor-pointer hover:bg-blue-900  transition  duration-500 ">Explore</button></div>
      </div>
    </div>
  </>
}

export default HeroSection

