import React from "react";
import logo from "/src/assets/logo.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeIn = {
  initial: { opacity: 0.2 },
  whileInView: { opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true, margin: "-100px" },
};

export default function Footer() {
  const { t } = useTranslation("home");

  const resourcesLinks = t("footer.resources.links", { returnObjects: true }) || [];
  const platformLinks = t("footer.platform.links", { returnObjects: true }) || [];
  const communityLinks = t("footer.community.links", { returnObjects: true }) || [];

  return (
    <footer className="sm:flex space-y-8 max-sm:text-center md:max-lg:text-center flex-wrap md:[&>*]:basis-[45%] lg:[&>*]:basis-[18%] mt-20 justify-between w-[90%] mx-auto p-10 border-t-1 border-slate-500/50 [&_li_a]:hover:border-orange-600 [&_li_a]:hover:text-orange-600 [&_li_a]:border-b-2 [&_li_a]:border-transparent [&_li_a]:transition-all">
      <motion.div {...fadeIn} className="lg:basis-[30%]! md:text-justify">
        <img
          className="w-30 mb-3 -mt-6 max-sm:mx-auto md:max-lg:mx-auto"
          src={logo}
          alt="Logo"
        />
        <p>{t("footer.description")}</p>
      </motion.div>

      <motion.ul {...fadeIn} className="space-y-1">
        <h3 className="text-xl text-white font-medium mb-7">{t("footer.resources.title")}</h3>
        {resourcesLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </motion.ul>

      <motion.ul {...fadeIn} className="space-y-1">
        <h3 className="text-xl text-white font-medium mb-7">{t("footer.platform.title")}</h3>
        {platformLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </motion.ul>

      <motion.ul {...fadeIn} className="space-y-1">
        <h3 className="text-xl text-white font-medium mb-7">{t("footer.community.title")}</h3>
        {communityLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </motion.ul>

      <h1 className="text-center mx-auto text-white bg-slate-700/15 w-fit p-3 text-nowrap">
        {t("footer.designedBy")}{" "}
        <a
          href="https://github.com/xb-16"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Ahmed Assari
        </a>
      </h1>
    </footer>
  );
}
