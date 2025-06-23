import profileImg from "../assets/profile1.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center px-4 bg-[#111] overflow-x-hidden"
      id="hero"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="text-center md:text-left" data-aos="fade-right">
          <h2 className="text-lg text-pink-200 mb-2">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bagus Tegar Rahardiansyah
          </h1>
          <h3 className="text-2xl md:text-3xl mb-4 text-pink-400">
            Front End Developer
          </h3>
          <p className="text-md mb-6 text-gray-300">
            Passionate Front-End Developer 🚀 with experience in building
            interactive web applications using JavaScript / React.js and
            designing engaging and functional interfaces through Figma and
            modern UI/UX principles.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="https://github.com/bagustgrh"
              className="bg-[#333333] hover:opacity-80 p-3 rounded-full text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bagustgrh/"
              className="bg-[#0A66C2] hover:opacity-80 p-3 rounded-full text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/bagustgrh/"
              className="bg-[#E1306C] hover:opacity-80 p-3 rounded-full text-white"
            >
              <FaInstagram />
            </a>
          </div>
          <a
            href="#about"
            className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition"
          >
            More About Me
          </a>
        </div>
        <div data-aos="fade-left">
          <div className="relative w-60 h-60 md:w-64 md:h-64 rounded-full border-4 border-pink-500">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
