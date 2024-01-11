import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Frontend Web Development",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "I specialize in translating design concepts into engaging and interactive user interfaces. Proficient in HTML, CSS, and JavaScript, I leverage popular frameworks like React.js to create responsive and visually appealing websites.",
  },
  {
    name: "Backend Web Development",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: " I excel in server-side scripting languages like Node.js and Python, employing frameworks like Express and Django. Proficient in database design and management, I ensure optimal data storage and retrieval, utilizing databases such as MySQL and MongoDB.",
  },
  {
    name: "UI/UX Design",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "My expertise lies in conducting user research, creating wireframes, and prototyping to ensure the optimal user experience. Proficient in industry-standard design tools, I transform complex ideas into elegant, user-friendly designs that resonate with target audiences.",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div className="card group space-y-3 p-4 bg-dark  hover:bg-primary duration-300 text-white">
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-white duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
