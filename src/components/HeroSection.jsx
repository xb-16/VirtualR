import React from "react";
import video1 from "/src/assets/video1.mp4";
import video3 from "/src/assets/video3.mp4";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <motion.header
      className="flex justify-center border-t-1 border-slate-500/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3, ease: "easeIn" }}
    >
      <div className="w-[90%] flex flex-col items-center mt-6 lg:mt-20 gap-10">
        {/* Title */}
        <h1 className="text-center text-4xl sm:text-6xl lg:text-5xl capitalize tracking-wide">
          {t("hero.title").split("for")[0]}{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
            {t("hero.highlight")}
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-gray-400 text-lg max-w-3xl">
          {t("hero.description")}
        </p>

        {/* Buttons */}
        <div className="space-x-3">
          <button className="px-3 py-1 border-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
            {t("hero.start")}
          </button>
          <button className="px-3 rounded-md py-1 border-2 bg-transparent hover:bg-orange-600 transition-all">
            {t("hero.docs")}
          </button>
        </div>

        {/* Videos */}
        <div className="flex justify-center gap-3">
          <video
            autoPlay
            muted
            loop
            className="w-1/2 rounded-2xl border-orange-400/70 border-1 shadow-orange-500"
          >
            <source src={video1} type="video/mp4" />
            {t("hero.noSupport") || "Your Browser Doesn't Support the video Tag."}
          </video>
          <video
            autoPlay
            muted
            loop
            className="w-1/2 rounded-2xl border-orange-400/70 border-1 shadow-orange-500"
          >
            <source src={video3} type="video/mp4" />
            {t("hero.noSupport") || "Your Browser Doesn't Support the video Tag."}
          </video>
        </div>
      </div>
    </motion.header>
  );
}
