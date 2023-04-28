"use client";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div className="text-white w-5/6 mx-auto py-6">
        <div>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl">
              Winifred Sunday
            </Link>
            {!open && (
              <div
                onClick={handleMenu}
                className="lg:hidden text-2xl cursor-pointer"
              >
                <HiMenuAlt1 />
              </div>
            )}
          </div>
          <div className="flex text-sm gap-2 lg:gap-4">
            <Link href="writing">Writer</Link>
            <p>Counsellor</p>
            <p>Creative consultant</p>
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute bg-black text-white opacity-90 top-0 w-full h-full">
          <div className="w-10/12 py-8 mx-auto">
            <div
              onClick={handleMenu}
              className="flex cursor-pointer justify-end text-2xl"
            >
              <MdClose />
            </div>

            <div className="text-4xl flex items-center flex-col gap-3 mt-12">
              <Link href="writing" ><p onClick={() => setOpen(false)}>Writings</p></Link>
              <Link href='media' onClick={() => setOpen(false)}>Media</Link>
              <p>Contact</p>
            </div>

            <div className="flex justify-center text-2xl gap-5 mt-16">
              <Link
                target="_blank"
                href="https://instagram.com/winniesunday98?igshid=ZDdkNTZiNTM="
              >
                <BsInstagram className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com/winnie_sunday98?t=PQhJ_nCURhWIbElbrkIG_Q&s=09"
              >
                <BsTwitter className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100087101065002&mibextid=ZbWKwL"
              >
                <BsFacebook className="cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/winnie-sunday-bb5902213"
              >
                <BsLinkedin className="cursor-pointer" />
              </Link>
              <Link target="_blank" href="https://wa.me/message/ZEO2DWYYXKKKG1">
                <BsWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
