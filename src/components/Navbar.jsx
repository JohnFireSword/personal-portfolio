import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
     
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <div className="flex items-center space-x-4 cursor-pointer transform hover:scale-110 transition-transform duration-300">
          <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold ">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div>
            <h3 className="logo ">Giannis Giotis</h3>
          </div>
        </div>

        <nav className="desktop ">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group flex items-center gap-2">
                <a href={link} className="flex items-center gap-2">
                  <span>{name}</span>
                  {name.toLowerCase() === "work" && (
                    <span className="border border-gray-500 rounded-md px-1 text-gray-300 text-sm hover:bg-gray-700 hover:text-white transition">
                      /
                    </span>
                  )}
                </a>
                <span className="underline" />
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group ">
          <button className="cursor-pointer shadow-[0px_4px_8px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Contact me
              </p>

              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Contact me
              </p>
            </div>
          </button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
