import erpImg from "../assets/erp.png";
import dimsumDateImg from "../assets/dimsum.png";
import portfolioImg from "../assets/portfolio.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

const projects = [
  {
    title: "ERP RPL",
    image: erpImg,
    description:
      "ERP RPL is a Software Engineering (RPL) course project in the Informatics Study Program at Ahmad Dahlan University (UAD). ERP stands for Enterprise Resources Planning. From a software perspective, ERP is a system.",
    tech: "Blade, PHP, SCSS",
    github: "https://github.com/ardiansyah-sweng/erp_rpl",
  },
  {
    title: "Dimsum Date",
    image: dimsumDateImg,
    description:
      "A responsive website that serves as a profile platform for Dimsum Date, making it easy for users to explore products and information from any device.",
    tech: "PHP, Blade, CSS",
    github: "https://github.com/padiw123/Web-Profile-Dimsum-Date",
  },
  {
    title: "Portfolio Website",
    image: portfolioImg,
    description:
      "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    tech: "React, TailwindCSS",
    github: "https://github.com/bagustgrh/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-flex items-center justify-center gap-2">
          <HiOutlineClipboardList className="text-white" />
          Past Project Experience
        </h2>
        <p className="text-gray-400">
          Explore the projects{" "}
          <span className="text-pink-400">I've worked on so far</span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-lg p-4 shadow-lg hover:shadow-pink-500/30 transition relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-left">
              {project.description}
            </p>
            <p className="text-pink-400 text-sm text-left mb-4">
              {project.tech}
            </p>
            <div className="absolute bottom-4 right-4 text-white">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
              >
                <FaGithub className="text-xl hover:text-pink-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
