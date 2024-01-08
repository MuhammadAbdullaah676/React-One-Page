import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    //api calling or sending data to server

    setFormData({ name: "", email: "", company: "" }); //Clear form
  }
  return (
    <div className="bg-white w-full lg:w-[50%] shadow-2xl rounded-[10px] text-black font-inter">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-12 relative overflow-clip gap-[48px]"
      >
        <div>
          <header className="font-extrabold text-4xl mb-6">Registration</header>
          <div className="text-neutral-600 text-base font-inter font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </div>
        </div>

        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="name"
              className="text-base font-medium self-stretch max-md:max-w-full max-md:mt-10"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="text-neutral-400 text-base font-medium whitespace-nowrap self-stretch border bg-slate-50 justify-center pl-4 pr-16 py-4 rounded-md border-solid border-indigo-100 items-start max-md:max-w-full max-md:pr-5"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="company"
              className="text-base font-medium self-stretch max-md:max-w-full max-md:mt-10"
            >
              Company
            </label>
            <input
              type="text"
              placeholder="Enter Your Company Name"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="text-neutral-400 text-base font-medium whitespace-nowrap self-stretch border bg-slate-50 justify-center pl-4 pr-16 py-4 rounded-md border-solid border-indigo-100 items-start max-md:max-w-full max-md:pr-5"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="email"
              className="text-base font-medium self-stretch max-md:max-w-full max-md:mt-10"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="text-neutral-400 text-base font-medium whitespace-nowrap self-stretch border bg-slate-50 justify-center pl-4 pr-16 py-4 rounded-md border-solid border-indigo-100 items-start max-md:max-w-full max-md:pr-5"
            />
          </div>
        </div>

        <button
          className="text-white text-base font-bold whitespace-nowrap justify-center items-center border shadow-2xl bg-amber-500 w-[200px] max-w-full px-16 py-4 rounded-[40px] border-solid border-amber-500 self-start max-md:px-5"
          type="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
