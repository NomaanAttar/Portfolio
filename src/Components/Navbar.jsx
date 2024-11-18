import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-black">My Portfolio</h1>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-icons">menu</span>
        </button>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="text-black hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition-colors text-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors text-black">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-center">
          <li className="py-2">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li className="py-2">
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className="py-2">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact Me
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
