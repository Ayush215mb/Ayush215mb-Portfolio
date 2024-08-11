import React from "react";

const First = () => {
  return (
    <div className="h-screen mx-10 ">
      <div className="items-center md:flex-row-reverse flex-col justify-center py-7 flex gap-10 lg:justify-around ">
        <img
          src="/Images/Ayush215mb.jpg"
          className="lg:max-w-md rounded-3xl "
        />
        <div className="flex flex-col gap-5">
          <h1 className="md:text-7xl text-2xl"> AYUSH YADAV</h1>
          <p className="md:text-3xl">Hello there! 🤙</p>
          <p className="md:text-xl md:max-w-xl">
            I am a passionate Web Developer with a knack of creating beautiful
            and functional websites.
            <br /> I like transforming ideas into enaging and user-friendly web
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
