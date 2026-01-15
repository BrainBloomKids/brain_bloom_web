import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';  

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-mint-100 text-white p-4 flex justify-between items-center">
      {/* Logo + Title */}
      <div className="flex items-end">
        <img src={Logo} alt="Brain Bloom Logo" className="w-[80px] h-[80px]" />
        <h1 className="text-3xl font-brand text-mint-900 mb-3 -ml-3">
          Brain Bloom Kids
        </h1>
      </div>

      {/* Hamburger (visible on mobile/tablet only) */}
      <button
        className="md:hidden text-purple-900 text-4xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-row gap-6">
        <NavLink to="/"className={({ isActive }) =>
              `text-4xl font-brand mb-5 ${
                  isActive ? "text-violet-900" : "text-mint-900"
              } hover:text-mint-800`
            }>Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `text-4xl font-brand mb-5 ${
              isActive ? "text-violet-900" : "text-mint-900"
            } hover:text-mint-800`
          }>About
        </NavLink> 
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden">
          <div className="absolute left-0 top-0 h-full w-64 bg-mint-800 shadow-xl p-6 flex flex-col gap-6">
            <button
              className="text-3xl text-mint-900 self-end  hover:text-mint-700"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-brand ${
                  isActive ?  "text-violet-900" : "text-mint-900"
                } hover:text-mint-700`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-brand ${
                  isActive ? "text-violet-900" : "text-mint-900"
                } hover:text-mint-700`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
