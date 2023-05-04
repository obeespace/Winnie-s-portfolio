import React from "react";

const WritingBlock = () => {
  return (
    <main>
      <div className="lg:w-5/6 mx-auto lg:flex my-5 gap-20">
        <p className="text-3xl font-semibold">Title</p>
        <div className="mt-5 lg:mt-0">
          <p className="lg:mb-3 italic">Summary</p>
          <p className="mt-2 lg:mt-0">Link</p>
        </div>
      </div>
      <hr className="text-white text-xl w-4/6 mx-auto" />
    </main>
  );
};

export default WritingBlock;
