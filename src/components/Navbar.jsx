export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white shadow sticky top-0 z-50 w-full">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <ul className="flex gap-8 text-sm font-medium pr-4 md:pr-8">
        <li>
          <a href="#" className="hover:text-pink-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-pink-300 transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-pink-300 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-pink-300 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-pink-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
