import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row p-3 sm:p-14 bg-secondary text-white">
      <div className="w-full lg:w-2/5 p-3 mb-3 lg:m-0">
        <h1 className="text-3xl mb-4">Contact Us</h1>
        <p className="text-gray-300">
          After moved, male won't Moveth moveth fruitful don't forth you bearing
          morning made male without life be blessed rule stars divided two.
          Firmament of, him she'd good of his morning
        </p>
      </div>
      <div className="w-full lg:w-3/5 grid grid-cols-2 gap-4">
        <input
          className="col-span-2 sm:col-span-1 bg-primary p-3 transform -skew-x-3 rounded focus:outline-none transition-all duration-200 focus:bg-white focus:text-black"
          placeholder="Name"
          type="text"
          name=""
          id=""
        />
        <input
          className="col-span-2 sm:col-span-1 bg-primary p-3 transform -skew-x-3 rounded focus:outline-none transition-all duration-200 focus:bg-white focus:text-black"
          placeholder="Email"
          type="text"
          name=""
          id=""
        />
        <textarea
          className="col-span-2 bg-primary p-3 rounded focus:outline-none min-h-7 transition-all duration-200 focus:bg-white focus:text-black"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="w-max mt-3 bg-danger transform -skew-x-3 rounded py-2 px-7 hover:bg-white hover:text-black transition-all duration-200 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
