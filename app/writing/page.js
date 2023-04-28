import Link from "next/link";
import React from "react";

const cardData = [
  {name: 'Fashion'},
  {name: 'Food'},
  {name: 'Fantasy'},
  {name: 'Culture'},
  {name: 'Livestyle'},
]

const Card = (props) => {
  return (
    <Link href={`writing/${props.name.toLowerCase()}`} className="mt-7 shadow-sm shadow-white rounded-md py-4 px-10 lg:w-3/12 hover:scale-110 transition ease-in-out delay-150 duration-300">
      <p className="text-2xl group-hover:scale-105">{props.name}</p>
      <p className="text-sm mt-10">Click to see Projects</p>
    </Link>
  );
};

const page = () => {
  return (
    <main className="text-white lg:pt-10 w-5/6 mx-auto">
      <div className="text-3xl">Writings</div>
      <div className="lg:flex flex-wrap justify-evenly gap-3">
        {cardData.map(m => {
          return (<Card {...m}/>)
        })}
      </div>
    </main>
  );
};

export default page;
