import React from "react";
import bgImage from "../assets/Rectangle913.png";
import image from "../assets/editor2.png";

const PageC = () => {
  return (
    <div className="my-20">
      <img src={bgImage} alt="" className="absolute -ml-20 w-full z-0" />
      <h1 className="relative font-bold text-4xl py-10 text-medblue ">
        Snapshot of our simple-to-use editor
      </h1>

      <div className="flex relative justify-between px-20">
        <img src={image} alt="" />

        <div className="w-1/3 text-xl flex flex-col gap-8">
          <p className="font-light text-lg">
            All the flexibility & intuition you need to build a resume that
            stands out
          </p>

          <div className="w-96 flex gap-8">
            <div className="w-4 h-4 rounded-full bg-redish -mx-4 my-1"></div>
            <div className="flex flex-col">
              <h6 className="font-bold"> Multi-theme & type face</h6>
              <p className="font-medium">for personalization.</p>
            </div>
          </div>

          <div className="w-96 flex gap-8">
            <div className="w-4 h-4 rounded-full bg-redish -mx-4 my-1"></div>
            <div className="flex flex-col">
              <h6 className="font-bold"> Placeholder resume content </h6>
              <p className="font-medium">  to guide your filling.</p>
            </div>
          </div>

          <div className="w-96 flex gap-8">
            <div className="w-4 h-4 rounded-full bg-redish -mx-4 my-1"></div>
            <div className="flex flex-col">
              <h6 className="font-bold"> Multiple layouts & templates </h6>
              <p className="font-medium"> to choose from. </p>
            </div>
          </div>

          <button className="capitalize p-3 px-12 rounded-full bg-medblue w-fit text-white text-xs font-bold hover:scale-105 duration-200 hover:bg-darkblue">create resume</button>
          <h2 className="capitalize -my-4">our stats : </h2>

          <div className="flex gap-5">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold">200+</h1>
                <p className="text-sm">users</p>
            </div>
            <div className="h-[67px] w-[2px] bg-black"></div>
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold">3 mins</h1>
                <p className="text-sm">Average resume building time </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageC;
