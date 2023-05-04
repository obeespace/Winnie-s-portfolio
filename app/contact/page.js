import React from "react";

const page = () => {
  return (
    <main className="text-white lg:pt-10 w-5/6 mx-auto">
      <div className="text-3xl">Contact</div>
      <p className="lg:w-5/6 mx-auto lg:mt-10 mt-5">
        I am available for general questions/comments/concerns as well as
        potential employment opportunities in writing, Media, or counselling.
      </p>

      <div className="mt-10 lg:w-4/6 mx-auto flex flex-col items-center">
        <div className="w-full lg:flex justify-between items-center">
          <input
            placeholder="Name"
            className="border-b border-white px-3 py-1 w-full lg:w-5/12 mb-5 lg:mb-0 rounded-md bg-black placeholder:text-gray-400 outline-none"
          />
          <input
            placeholder="Email"
            className="border-b border-white px-3 py-1 w-full lg:w-5/12 mb-5 lg:mb-0 rounded-md bg-black placeholder:text-gray-400 outline-none"
          />
        </div>
        <textarea
          className="w-full px-3 py-1 border-b border-white mt-2 lg:mt-5 rounded-md bg-black placeholder:text-gray-400 outline-none"
          placeholder="Message"
          rows={5}
        />
        <div className="w-full flex justify-end mt-8"><button className="bg-white text-black px-4 hover:bg-gray-400 py-3 rounded-md shadow-sm">Send Message</button></div>
      </div>
    </main>
  );
};

export default page;
