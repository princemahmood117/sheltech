
import { useState } from "react";
import { FiUser, FiHeart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import logo from '../../assets/logoBg.png'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navIcons = [
    { icon: <FiUser />, label: "Login" , to : '/login' },
    { icon: <FiHeart />, label: "Favourites", to : '/favourites' },
    { icon: <FiSearch />, label: "Search" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-10  bg-black/10 backdrop-blur-sm border-b border-white/10">

        {/* LEFT LOGO */}
        <div className="w-[140px] md:w-[200px]">
          <Link to={'/'} className="flex items-center gap-3">
          <img src={logo} className="h-18 w-full object-cover" alt="Logo" />
        </Link>
        </div>

        {/* right side icons */}
        <div className="flex items-center gap-5 text-xl text-white">

          {navIcons.map((item, index) => (
            <Link
            to={item?.to}
              key={index}
              className="relative md:p-4 p-2 cursor-pointer overflow-hidden md:text-xl text-sm
                         before:absolute before:left-[-100%] before:top-0 
                         before:h-full before:w-full before:bg-gray-50 
                         before:transition-all before:duration-500 hover:before:left-0
                         rounded-md hover:text-gray-500 transition-all hover:scale-110"
              title={item.label}
            >
              <span className="relative z-10">{item?.icon}</span>
            </Link>
          ))}

          {/* MENU ICON */}
          <div
            onClick={() => setOpen(true)}
            className="relative md:p-4 p-2 cursor-pointer overflow-hidden md:text-xl text-sm
                       before:absolute before:left-[-100%] before:top-0 
                       before:h-full before:w-full before:bg-gray-50
                       before:transition-all before:duration-300 hover:before:left-0
                       rounded-md transition-all hover:scale-110 hover:text-gray-500"
          >
            {/* <FiMenu /> */}
            <span className="relative z-10"><FiMenu /></span>
          </div>
        </div>
      </nav>

      {/* RIGHT SLIDE-IN MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55]"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-80 bg-white shadow-xl z-[60] p-5"
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end text-3xl cursor-pointer mb-5 text-gray-700 hover:text-black transition">
                <FiX onClick={() => setOpen(false)} />
              </div>

              {/* MENU LIST */}
              <ul className="text-lg space-y-4 text-gray-800">
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Home</li>
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Residential</li>
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Commercial</li>
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Landowner</li>
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Ongoing Projects</li>
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Completed Projects</li>
                <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Contact Us</li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
