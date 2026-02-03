import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';  

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-mint-100 text-white p-4 flex justify-between items-end">
//       {/* Logo + Title */}
//       <div className="flex items-end">
//         <img src={Logo} alt="Brain Bloom Logo" className="w-[80px] h-[80px]" />
//         <h1 className="text-3xl font-brand text-mint-900 mb-3 -ml-3">
//           BrainBloomKids
//         </h1>
//       </div>

//       {/* Hamburger (visible on mobile/tablet only) */}
//       <button
//         className="md:hidden text-purple-900 text-4xl"
//         onClick={() => setOpen(true)}
//       >
//         ☰
//       </button>

//       {/* Desktop Menu */}
//       <nav className="hidden md:flex flex-row gap-6 mb-2 mr-6 items-end">
//         <NavLink to="/"className={({ isActive }) =>
//               ` flex items-end text-3xl font-brand  ${
//                   isActive ? "text-violet-900" : "text-mint-900"
//               } hover:text-mint-800`
//             }>Home
//           </NavLink>
//           <NavLink to="/about" className={({ isActive }) =>
//             `text-3xl font-brand  ${
//               isActive ? "text-violet-900" : "text-mint-900"
//             } hover:text-mint-800`
//           }>About
//         </NavLink> 
//       </nav>

//       {/* Mobile Sidebar */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden">
//           <div className="absolute left-0 top-0 h-full w-64 bg-mint-800 shadow-xl p-6 flex flex-col gap-6">
//             <button
//               className="text-3xl text-mint-900 self-end  hover:text-mint-700"
//               onClick={() => setOpen(false)}
//             >
//               ✕
//             </button>

//             <NavLink
//               to="/"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `text-3xl font-brand ${
//                   isActive ?  "text-violet-900" : "text-mint-900"
//                 } hover:text-mint-700`
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/about"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `text-3xl font-brand ${
//                   isActive ? "text-violet-900" : "text-mint-900"
//                 } hover:text-mint-700`
//               }
//             >
//               About
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-mint-100 text-white p-4 flex justify-between items-end overflow-x-hidden">
      
      {/* Logo + Title */}
      <div className="flex items-end">
        <img src={Logo} alt="Brain Bloom Logo" className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]" />
        <h1 className="text-3xl mb-1.5 sm:text-5xl font-brand text-mint-900 md:ml-2 sm:mb-3">
          BrainBloomKids
        </h1>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-purple-900 text-4xl mr-4 mb-1 sm:mb-3 sm:text-5xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-row gap-6 mb-2.5 mr-6 items-end">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-3xl font-brand ${
              isActive ? "text-purple-900" : "text-mint-900"
            } hover:text-mint-800`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-3xl  font-brand ${
              isActive ? "text-purple-900" : "text-mint-900"
            } hover:text-mint-800`
          }
        >
          About
        </NavLink>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden">
          <div className="absolute left-0 top-0 h-full w-64 bg-mint-700 shadow-xl p-6 flex flex-col gap-6">
            <button
              className="text-3xl text-mint-900 self-end hover:text-mint-700"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-brand ${
                  isActive ? "text-purple-900" : "text-mint-900"
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
                  isActive ? "text-purple-900" : "text-mint-900"
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
// export default Header;