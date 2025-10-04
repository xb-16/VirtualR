import React, { useState, useEffect } from "react";
import logo from "/src/assets/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation("common");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = t("nav.items", { returnObjects: true });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="w-full sticky top-0 bg-[#242424] z-20 border-b border-neutral-700/40">
      <div className="container flex items-center justify-between py-3 px-3 mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-1">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="text-lg font-semibold">VirtualR</span>
        </div>

        {/* Center: Nav Items (desktop only) */}
        <ul className="hidden lg:flex gap-8 items-center justify-center flex-1">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Buttons + Lang switcher (desktop only) */}
        <div className="hidden lg:flex items-center gap-3 justify-end flex-1">
          <button className="px-4 py-2 border rounded-md hover:bg-orange-600 transition">
            {t("signin")}
          </button>
          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
            {t("createAccount")}
          </button>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-[#242424] border border-gray-500 text-white rounded-md px-2 py-1"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="fr">🇫🇷 FR</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#1e1e1e] px-5 overflow-hidden"
          >
            {/* 🔥 Nav items: responsive grid */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-center">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="block w-full py-2 hover:text-orange-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* 🔥 Buttons row */}
            <div className="flex justify-center gap-3 py-3">
              <button className="px-4 py-2 border rounded-md hover:bg-orange-600 transition">
                {t("signin")}
              </button>
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                {t("createAccount")}
              </button>
            </div>

            {/* 🔥 Language selector */}
            <div className="flex justify-center py-2">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="bg-[#242424] border border-gray-500 text-white rounded-md px-2 py-2"
              >
                <option value="en">🇬🇧 EN</option>
                <option value="fr">🇫🇷 FR</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
