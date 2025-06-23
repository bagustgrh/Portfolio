import {
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Kolom 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Bagus's Portfolio</h3>
          <p className="text-sm mb-2">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p className="text-sm">
            Keep Rising ✍️. Connect with me over live chat!
          </p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#hero" className="hover:text-yellow-300">
                ➤ Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300">
                ➤ About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-300">
                ➤ Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-yellow-300">
                ➤ Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">
                ➤ Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaInstagram className="text-pink-400" />
              @bagustgrh
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              rahardiiansyah69@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" />
              Yogyakarta, Indonesia
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 text-xl mt-4">
            <a
              href="https://www.linkedin.com/in/bagustgrh/"
              className="bg-white text-black rounded-full p-2 hover:bg-yellow-300 hover:text-black transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bagustgrh"
              className="bg-white text-black rounded-full p-2 hover:bg-yellow-300 hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.tiktok.com/@bagustgrh"
              className="bg-white text-black rounded-full p-2 hover:bg-yellow-300 hover:text-black transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.instagram.com/bagustgrh/"
              className="bg-white text-black rounded-full p-2 hover:bg-yellow-300 hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="mt-10 text-center border-t border-gray-600 pt-4 text-sm text-white">
        Designed With ❤️ By <span className="text-yellow-400">Bagus</span>
      </div>
    </footer>
  );
}
