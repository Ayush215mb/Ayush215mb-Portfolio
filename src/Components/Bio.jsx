import React from "react";

const Bio = () => {
  return (
    <div className="flex justify-around md:my-32  ">
      <div>
        <h2 className="text-3xl md:text-4xl mb-8 font-bold text-center">Bio</h2>
        <div className="flex flex-col items-center justify-center text-xl px-5  md:max-w-3xl gap-5 ">
          <p>
            I am a 20-year-old from Kolkata, India currently pursuing a B.Tech
            in Computer Science and Engineering(2023-27).
          </p>
          <p>
            Other than that, I am also a dedicated freelance front-end web
            developer with experience in creating high-quality websites. Skilled
            in React.js, React Native and firebase, I aim to leverage my
            expertise to build innovative digital solutions. Passionate about
            crafting userfriendly interfaces and embracing cutting-edge
            technologies for efficient development.
          </p>
          <p>
            I actively participate in online hackathons and coding competitions
            and work as freelance front-end developer.If you have any questions,
            feel free to ask in the contact page or directly DM me on any of my
            social media accounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
