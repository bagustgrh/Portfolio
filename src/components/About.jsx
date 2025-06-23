import profileImg from "../assets/profile.jpg";
import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111] text-white pt-28 pb-20 px-6 scroll-mt-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
          <FaUser className="text-white" /> About{" "}
          <span className="text-pink-500">Me</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 justify-center">
        <div
          className="w-full md:w-1/3 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={profileImg}
            alt="About"
            className="w-64 h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 text-left" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-2">
            I'm Bagus Tegar Rahardiansyah
          </h2>
          <h3 className="text-xl text-pink-400 font-semibold mb-4">
            Front End Developer and UI/UX Desainer
          </h3>
          <p className="mb-4 text-gray-300">
            I am a Front-End developer based in Indonesia. I am passionate about
            improving my coding skills and building web applications using
            JavaScript / React.js. I enjoy creating visually appealing,
            user-friendly websites with modern UI/UX principles.
          </p>
          <p className="mb-2">
            <span className="text-pink-400">Email</span>:
            rahardiansyah69@gmail.com
          </p>
          <p className="mb-6">
            <span className="text-pink-400">Place</span>: Yogyakarta, Indonesia
          </p>
          <a
            href="https://drive.google.com/file/d/1x_hoQrocLC0wQxDMXiHaaHsFbhbUIZbz/view?usp=drive_link"
            className="inline-block bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition shadow"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
