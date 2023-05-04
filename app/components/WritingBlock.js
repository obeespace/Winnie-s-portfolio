import React from "react";

const WritingBlock = (props) => {
  
  return (
    <main>
      <div className="lg:w-5/6 mx-auto lg:flex my-5 gap-20">
        <p className="text-xl w-5/6 font-semibold">{props.title}</p>
        <div className="mt-5 lg:mt-0">
          <p className="lg:mb-3 italic text-gray-200">{props.summary}</p>
          <p className="mt-2 lg:mt-0">Link</p>
        </div>
      </div>
      <hr className="text-white text-xl w-4/6 mx-auto" />
    </main>
  );
};

export default WritingBlock;
