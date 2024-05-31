import React from "react";
import image from "../assets/Rectangle 832.png";
import icon1 from "../assets/seated man wearing headphones using laptop.png";
import icon2 from '../assets/Online security.png'
import icon3 from '../assets/Web design.png'
import icon4 from '../assets/Design Process.png'
import icon5 from '../assets/image 12.png'
import icon6 from '../assets/No messages.png'




const PageE = () => {
  const benefits = [
    {
      image: icon1,
      heading: "Easy to use",
      text: " The process of writing a resume is substantially sped up and simplified by using our resume builder.",
    },
    {
      image: icon2,
      heading: "secure",
      text: " We respect your privacy & give you control over your content and your data with us.",
    },
    {
      image: icon3,
      heading: "Cool Templates",
      text: "Our template designs help your resume standout in a pool of others.",
    },
    {
      image: icon4,
      heading: "Intelligent Design",
      text: " With us, you won't have to bother about the minute details of resume development, such as font choice, layout, etc.",
    },
    {
      image: icon5,
      heading: " HR-Approved & ATS-Friendly",
      text: " The core design of our resume templates are HR-Approved & accepted by leading organizations.",
    },
    {
      image: icon6,
      heading: "No Hidden Charges",
      text: " We've got a free version and our premium pricing is clear. We notify you about any new changes in good time.",
    },
  ];
  return (
    <div className="my-24">
      <h1 className="font-bold text-5xl text-center text-medblue">
        About FutureResume{" "}
      </h1>
      <div className="flex justify-center gap-16 ml-32 mt-20">
        <img src={image} alt="" />
        <div className="flex flex-col gap-8">
          <p className="w-2/3">
            Future Resume is a product of FutureLabs — a global innovation &
            digital skill learning center. Future Resume was born of the need to
            create a new way for job-seekers to connect with recruiters. Hence,
            our best hands got to work with one thing in mind: to help you find
            a great job faster. We went even further to ensure that our Template
            designs meet Industry Standards and accepted by leading HR
            departments. With us, you can spin out an impressive resume that
            makes a memorable first impression!
          </p>
          <button className="capitalize p-3 px-12 rounded-full bg-medblue w-fit text-white text-xs font-bold hover:scale-105 duration-200 hover:bg-darkblue">
            read more
          </button>
        </div>
      </div>
      <h1 className="font-bold text-5xl text-center text-medblue my-16">
        Benefits Of Using Our Product
      </h1>{" "}
      <p className="text-center text-redish capitalize text-2xl font-semibold -mt-8">
        why choose us?
      </p>
      <div className="mt-24 flex flex-wrap">

{
    benefits.map(({image,heading,text})=>(
        <div className="flex w-1/3 gap-6 p-4">
        <img src={image} alt="" className="h-2/4" />
        <div className="flex flex-col w-2/3 gap-4">
          <h1 className="font-bold text-3xl text-darkGrey">{heading}</h1>
          <p className="w-4/5 text-sm">
           {text}
          </p>
        </div>
      </div>

    ))
}

       



      </div>
    </div>
  );
};

export default PageE;
