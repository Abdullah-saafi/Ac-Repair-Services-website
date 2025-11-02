const Form = () => {
  return <>
    <div className="m-5 md:flex ">
      <div className="FormTxt flex items-center relative   bg-cover bg-center text-white p-10 md:w-[50%]" style={{ backgroundImage: "url('/numberbg.jpg') " }}>
        <div className="absolute inset-0"
          style={{ backgroundColor: "rgba(1, 8, 43, 0.88)" }}
        ></div>
        <div className="relative">
          <h1 className="text-2xl font-bold my-4 ">For Individuals And Organisations</h1>
          <p className="my-4">We provide reliable cooling and heating solutions tailored for both individuals and organizations.
          </p>
          <button className=" bg-primary px-5 py-2 rounded text-xl cursor-pointer hover:bg-blue-800">More Details</button>
        </div>

      </div>
      <div className="Form relative md:w-[50%]  flex justify-center bg-cover bg-center text-white md:p-10" style={{ backgroundImage: "url('/formbg.jpg') " }}>
        <div className="absolute inset-0"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.88)" }}
        ></div>
        <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md relative">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Contact Us
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            Submit
          </button>
        </form>

      </div>
    </div >

  </>
}

export default Form