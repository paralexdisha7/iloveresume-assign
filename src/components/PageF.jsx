import React from "react";
import bgImage from "../assets/Frame 89.png";
import pf1 from "../assets/Ellipse 94.png";
const PageF = () => {
  const reviews = [
    {
      image: pf1,
      name: "Abraham udoinyang,",
      post: "UI/UX Designer",
      review:
        "This is the best resume builder that I have come across so far, getting across, it is user friendly and also HR approved, I got my first job using this template.",
      position: "top-44 left-20",
    },
    {
      image: pf1,
      name: " Peter Ime,",
      post: "Web Developer",
      review:
        "We move with make a Creative Strategy for help your goal, we help to improve your income by a services",
      position: " -right-[40%] -top-64",
    },
    {
      image: pf1,
      name: "Nsisong Akpakpan,",
      post: "UI/UX Designer",
      review:
        "The experience is just smooth and adaptable, I was called up for an interview I applied with using future resume and my resume was naturally commended. Thanks Future Resume.",
      position: " -right-[55%] -top-52",
    },
  ];
  return (
    <div className="">
      <img src={bgImage} alt="" className="absolute -ml-20 w-full z-0" />
      <div className="relative w-1/3 pt-[30%] flex flex-col h-96">
        <h1 className="font-bold text-5xl">
          Testimonials From Our Previous Users
        </h1>
        <p className="text-2xl text-medblue capitalize">
          what people say about us
        </p>
      </div>

      {reviews.map(({image,name,post,review,position})=>(
        <div className={`relative w-1/3 flex flex-col gap-5 bg-grey p-4 rounded-lg shadow-md ${position}`}>
        <div className="flex items-center gap-10">
          <img src={image} alt="" />
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-xs font-bold text-medblue">{post}</p>
          </div>
        </div>
        <p className="text-xs font-medium">
          "{review}"
        </p>
      </div>
      ))}

     
    </div>
  );
};

export default PageF;
