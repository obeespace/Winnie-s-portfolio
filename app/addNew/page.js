import React from "react";

const page = () => {
  return (
    <main className="text-white lg:pt-10 w-5/6 mx-auto">
      <div className="text-3xl">Add New Writing</div>

      <div className="mt-10 lg:w-4/6 mx-auto flex flex-col items-center">
        <div className="w-full lg:flex justify-between items-center">
          <input
            placeholder="Title"
            className="border-b border-white px-3 py-1 w-full lg:w-5/12 mb-5 lg:mb-0 rounded-md bg-black placeholder:text-gray-400 outline-none"
          />
          <input
            placeholder="Link"
            className="border-b border-white px-3 py-1 w-full lg:w-6/12 mb-5 lg:mb-0 rounded-md bg-black placeholder:text-gray-400 outline-none"
          />
        </div>
        <textarea
          className="w-full px-3 py-1 border-b border-white my-2 lg:my-5 rounded-md bg-black placeholder:text-gray-400 outline-none"
          placeholder="Summary"
          rows={5}
        />
        <div className="w-full flex justify-start text-white ">
          <select
            name="cars"
            id="cars"
            className="border-b border-white px-3 py-1 rounded-md outline-none bg-black b"
          >
            <option>Select Category</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="w-full flex justify-end mt-8">
          <button className="bg-white text-black px-4 hover:bg-gray-400 py-3 rounded-md shadow-sm">
            Add New
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
