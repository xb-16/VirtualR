import React from "react";
import {
  BotMessageSquare,
  BatteryCharging,
  Fingerprint,
  ShieldHalf,
  PlugZap,
  GlobeLock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const scrollVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Features() {
  const { t } = useTranslation("home");

  const features = t("features.items", { returnObjects: true }) || [];

  const icons = [
    <BotMessageSquare />,
    <Fingerprint />,
    <ShieldHalf />,
    <BatteryCharging />,
    <PlugZap />,
    <GlobeLock />,
  ];

  return (
    <section className="border-b border-neutral-800 mt-20 flex flex-col gap-10 place-items-center">
      <div className="text-center bg-neutral-700 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-3 flex place-items-center uppercase w-fit mx-auto">
        {t("features.badge")}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mt tracking-wide">
        {t("features.title.part1")}{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
          {t("features.title.highlight")}
        </span>
      </h2>
      <motion.div layout className="flex w-full flex-wrap flex-col md:flex-row md:w-[90%] lg:w-[85%]">
        {features.map((feat, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[90%] mx-auto md:w-1/2 lg:w-1/3 p-5 flex gap-3"
            key={index}
          >
            <div className="basis-fit text-amber-700 bg-slate-800 h-fit p-2 rounded-[100%]">
              {icons[index]}
            </div>
            <div className="space-y-3">
              <h3 className="text-white mt-1">{feat.text}</h3>
              <p className="text-gray-400">{feat.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
