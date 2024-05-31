import React from "react";
import step1 from "../assets/download1.png";
import step2 from "../assets/download2.png";
import step3 from "../assets/download4.png";

const PageB = () => {
  return (
    <div className="mt-16 mx-auto">
      <h1 className="font-bold text-5xl text-center text-medblue">
        Build your <span className="text-redish">resume</span> in 3 steps
      </h1>

      <div className="flex justify-center items-center" id="step1">
        <img src={step1} alt="step 1" />
        <h1 className="text-5xl text-redish font-bold mr-6">1.</h1>
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-redish uppercase">Upload</h1>
          <p className="w-2/4">
            Ready to get started? Simply click on 'Choose Resume' below to
            upload your resume. Please note, we currently support only PDF
            format
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center ml-[700px]" id="step1">
        <img src={step3} alt="step 2" />
        <h1 className="text-5xl text-redish font-bold mr-6">2.</h1>
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-redish uppercase">Scan</h1>
          <p className="">
          AIMO will run your resume through ATS to get the details, and will create an ATS score based on various parameters.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center" id="step1">
        <img src={step2} alt="step 3" />
        <h1 className="text-5xl text-redish font-bold mr-6">1.</h1>
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-redish uppercase">optimize</h1>
          <p className="w-2/4">
          The model will rewrite your resume and provide personalized tips to enhance your score, along with steps to improve the details in your resume.
          </p>
        </div>
      </div>


    </div>
  );
};

export default PageB;
