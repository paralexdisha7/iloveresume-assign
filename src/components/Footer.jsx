import React from "react";
import { FaInstagram, FaFacebook, FaTwitter , FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between mx-16 mt-64">
        <div className=" flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-redish">future resume</h1>
          <p className="font-medium text-sm text-medblue">Create your resume in a minute, get your dream job in a blink.</p>
          <div className="flex gap-6  text-medblue ">
           <a href="#" className="opacity-60 hover:opacity-100"><FaFacebook size={30}/></a>
           <a href="#" className="opacity-60 hover:opacity-100"><FaTwitter size={30}/></a>
           <a href="#" className="opacity-60 hover:opacity-100"><FaInstagram size={30}/></a>
           <a href="#" className="opacity-60 hover:opacity-100"><FaLinkedin size={30}/></a>
          </div>
        </div>
        <div className=" flex flex-col gap-6 text-medblue">
            <h1 className="font-bold text-xl ">Terms & Policies</h1>
            <p className="text-sm hover:underline underline-offset-8 cursor-pointer">Terms of Service</p>
            <p className="text-sm hover:underline underline-offset-8 cursor-pointer">Privacy Policy</p>
        </div>
        <div className=" flex flex-col gap-6 text-medblue">

        <h1 className="font-bold text-xl ">Company</h1>
            <p className="text-sm hover:underline underline-offset-8 cursor-pointer">Home</p>
            <p className="text-sm hover:underline underline-offset-8 cursor-pointer">About Us</p>
            <p className="text-sm hover:underline underline-offset-8 cursor-pointer">Conact Us</p>
        </div>
      </div>
      <p className="text-center text-sm text-medblue font-medium py-20">Copyright, FutureResume 2024. All rights reserved.</p>
    </>
  );
};

export default Footer;
