import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage
    ? ""
    : "bg-stone-900 transition duration-500";

  return (
    <nav
      className={`${navBarBackground} w-full flex items-center justify-between fixed text-white py-5 px-14 z-40`}
    >
      <Link to="/" className="text-xl text-yellow-500 font-bold">
        Kuku Sama
      </Link>

      {isAboveSmallScreen ? (
        <div className="space-x-16">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link to="/menu" className="hover:text-yellow-500">
            Menu
          </Link>
          <Link to="/open" className="hover:text-yellow-500">
            Open
          </Link>
          <Link to="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>
      ) : (
        <motion.button
          alt="menu"
          className="rounded-full text-white p-3 hover:text-white/70 transition duration-100"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {!isAboveSmallScreen && isMenuToggled ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </motion.button>
      )}

      {/**Mobile menu */}
      {!isAboveSmallScreen && isMenuToggled && (
        <motion.div
          className="fixed top-0 bottom-0 h-full bg-stone-900/90 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -200 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex  justify-end px-7 py-2">
            {/**Close btn */}
            <motion.button
              className="rounded-full text-white pt-7 pr-24 hover:text-white/70 transition duration-100"
              alt="menu"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {!isAboveSmallScreen && isMenuToggled ? (
                <FaTimes size={24} />
              ) : (
                ""
              )}
            </motion.button>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center gap-10 text-xl text-gray-300 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link to="/" className="hover:text-yellow-500">
              {" "}
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              {" "}
              About
            </Link>
            <Link to="/menu" className="hover:text-yellow-500">
              {" "}
              Menu
            </Link>
            <Link to="/open" className="hover:text-yellow-500">
              {" "}
              Open
            </Link>

            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-500/80 font-medium py-2 px-4 rounded-sm mt-20"
            >
              {" "}
              Contact us
            </Link>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
