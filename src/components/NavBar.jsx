import React from "react";
import logo from "/src/assets/logo.png";
import { navItems } from "/src/constants.jsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion";
import { menu } from "framer-motion/client";

export default function NavBar() {
  let [menuState, setMenuState] = useState(false);
  let controls = useAnimationControls();

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMenuState(false);
      controls.start("default");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    if (menuState) {
      controls.start("initial");
    } else {
      controls.start("menu");
    }
    setMenuState(!menuState);
  }
  return (
    <nav className="w-full sticky top-0 bg-[#242424] flex justify-center transition-all duration-500 z-10">
      <div className="container flex place-items-center justify-between">
        <div className="flex gap-2 place-items-center">
          <img className="w-15 h-15" src={logo} />
          <span className="text-lg"> VirtualR</span>
        </div>
        <motion.ul
          className="hidden lg:flex gap-x-10 text-center"
          animate={controls}
          variants={{
            menu: {
              top: "100%",
              opacity: 1,
              height: "140px",
            },
            initial: {
              top: "-30%",
              height: 0,
              opacity: 0,
            },
            default: {
              top: "0",
              height: "auto",
              opacity: 1,
              transition: { duration: 0 },
            },
          }}
          initial={menuState ? "initial" : ""}
          transition={{
            duration: 1,
          }}
          style={
            menuState
              ? {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "80%",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#242424",
                  overflow: "hidden",
                }
              : {}
          }
        >
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </motion.ul>
        <motion.div
          className="hidden lg:flex gap-3 justify-center items-center"
          style={
            menuState
              ? {
                  display: "flex",
                  width: "80%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  background: "#242424",
                  overflow: "hidden",
                }
              : {}
          }
          animate={controls}
          variants={{
            menu: {
              top: "calc(100% + 100px + (10*4px))",
              opacity: 1,
            },
            initial: {
              top: "100%",
              opacity: 0,
            },
            default: {
              top: "0%",
              opacity: 1,
              transition: { duration: 0 },
            },
          }}
          initial={menuState ? "initial" : ""}
          transition={{
            duration: 0.9,
          }}
        >
          <button className="px-3 rounded-md py-1 border-2 bg-transparent hover:bg-orange-600 transition-all">
            Sign in
          </button>
          <button className="px-3 py-1 border-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
            Create an account
          </button>
        </motion.div>
        <div className="lg:hidden flex place-items-center justify-center p-2">
          <button onClick={toggleMenu}>
            {!menuState ? <Menu size={35} /> : <X size={35} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
