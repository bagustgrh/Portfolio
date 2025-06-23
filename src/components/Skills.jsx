import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaLaptopCode,
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMysql } from "react-icons/si";
import { useState } from "react";

const techStack = [
  {
    name: "HTML",
    level: "Advanced",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
  },
  {
    name: "PHP",
    level: "Advanced",
    icon: <FaPhp className="text-indigo-500 text-3xl" />,
  },
  {
    name: "Javascript",
    level: "Advanced",
    icon: <FaJs className="text-yellow-500 text-3xl" />,
  },
  {
    name: "Laravel",
    level: "Advanced",
    icon: <FaLaravel className="text-red-500 text-3xl" />,
  },
  {
    name: "C++",
    level: "Beginner",
    icon: <SiCplusplus className="text-blue-500 text-3xl" />,
  },
  {
    name: "NodeJS",
    level: "Beginner",
    icon: <FaNodeJs className="text-green-400 text-3xl" />,
  },
  {
    name: "Tailwind",
    level: "Advanced",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    icon: <FaBootstrap className="text-purple-500 text-3xl" />,
  },
  {
    name: "ReactJS",
    level: "Beginner",
    icon: <FaReact className="text-cyan-300 text-3xl" />,
  },
];

const tools = [
  {
    name: "Git",
    level: "Version Control",
    icon: <FaGitAlt className="text-red-500 text-3xl" />,
  },
  {
    name: "GitHub",
    level: "Git Hosting",
    icon: <FaGithub className="text-white text-3xl" />,
  },
  {
    name: "NPM",
    level: "Package Manager",
    icon: <FaNpm className="text-red-600 text-3xl" />,
  },
  {
    name: "MySQL",
    level: "Database",
    icon: <SiMysql className="text-cyan-400 text-3xl" />,
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("tech");

  const renderSkills = (list) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mt-8">
      {list.map((item, index) => (
        <div
          key={index}
          className="group flex items-center gap-4 bg-[#1a1a1a] border border-pink-400 px-6 py-4 rounded-md shadow-md transform hover:scale-105 transition duration-300 cursor-pointer hover:shadow-pink-500/30"
        >
          <div>{item.icon}</div>
          <div>
            <p className="text-white text-sm font-semibold">{item.name}</p>
            {item.level && (
              <p className="text-pink-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {item.level}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 border-b border-pink-500 inline-flex items-center gap-2 pb-1">
          <FaLaptopCode className="text-white" />
          Skills
        </h2>

        <div className="flex gap-4 mt-6">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "tech"
                ? "bg-pink-500 text-black"
                : "bg-gray-800 text-white"
            }`}
            onClick={() => setActiveTab("tech")}
          >
            Tech Stack
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "tools"
                ? "bg-pink-500 text-black"
                : "bg-gray-800 text-white"
            }`}
            onClick={() => setActiveTab("tools")}
          >
            Tools
          </button>
        </div>

        {activeTab === "tech" ? renderSkills(techStack) : renderSkills(tools)}
      </div>
    </section>
  );
}
