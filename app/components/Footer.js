import Link from "next/link";
import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="lg:mt-20 mt-10 py-10 text-white text-center">
      <div className="flex justify-center text-2xl gap-5 mb-3">
        <Link target="_blank" href='https://instagram.com/winniesunday98?igshid=ZDdkNTZiNTM='><BsInstagram className="cursor-pointer"/></Link>
        <Link target="_blank" href='https://twitter.com/winnie_sunday98?t=PQhJ_nCURhWIbElbrkIG_Q&s=09'><BsTwitter className="cursor-pointer" /></Link>
        <Link target="_blank" href='https://www.facebook.com/profile.php?id=100087101065002&mibextid=ZbWKwL'><BsFacebook className="cursor-pointer" /></Link>
        <Link target="_blank" href='https://www.linkedin.com/in/winnie-sunday-bb5902213'><BsLinkedin className="cursor-pointer" /></Link>
        <Link target="_blank" href='https://wa.me/message/ZEO2DWYYXKKKG1'><BsWhatsapp/></Link>
      </div>
      <p>Copyright © All rights reserved.</p>
    </div>
  );
};

export default Footer;
