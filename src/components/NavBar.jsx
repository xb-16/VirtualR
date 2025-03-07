import React from "react";
import logo from "/src/assets/logo.png";
import { navItems } from "/src/constants.jsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  let [menuState, setMenuState] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMenuState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    setMenuState(!menuState);
  }
  return (
    <nav className="w-full sticky top-0 bg-[#242424] flex justify-center transition-all duration-500 z-10"  style={menuState ? {marginBottom : "cal(220px"} : {}}>
      <div className="container flex place-items-center justify-between">
        <div className="flex gap-2 place-items-center">
          <img className="w-15 h-15" src={logo} />
          <span className="text-lg"> VirtualR</span>
        </div>
        <ul
          className="hidden lg:flex gap-x-10 text-center"
          style={
            menuState
              ? {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "80%",
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "140px",
                  background : "#242424"

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
        </ul>
        <div
          class="hidden lg:flex gap-3 justify-center items-center"
          style={
            menuState
              ? {
                  display: "flex",
                  width: "80%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  top: "calc(100% + 100px + (10*4px))",
                  background : "#242424"
                }
              : {}
          }
        >
          <button className="px-3 rounded-md py-1 border-2 bg-transparent hover:bg-orange-600 transition-all">
            Sign in
          </button>
          <button className="px-3 py-1 border-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
            Create an account
          </button>
        </div>
        <div class="lg:hidden flex place-items-center justify-center p-2">
          <button onClick={toggleMenu}>
            {!menuState ? <Menu size={35} /> : <X size={35} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
