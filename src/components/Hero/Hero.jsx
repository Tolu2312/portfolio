import React from "react";
import PersonImg from "../../assets/website/image.png";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <img src={PersonImg} alt="" className="" />
          </div>
          <div className="space-y-3 ">
            <p className="text-primary font-bold">Hello I'm David Agboola</p>
            <h1 className="text-5xl font-semibold">Fullstack Web Developer</h1>
            <p>
            I am a versatile professional with expertise in both frontend and backend technologies. With a strong foundation in HTML, CSS, and JavaScript, I craft seamless and visually appealing user interfaces using popular frameworks such as React and Node.js.  I excel in server-side scripting languages like Node.js and Python, employing frameworks like Express and Django. Proficient in database design and management, I ensure optimal data storage and retrieval, utilizing databases such as MySQL and MongoDB.88
            </p>
            <button className="uppercase bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white"> <a href="mailto:agbooladavid9@gmail.com">Hire me</a>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
