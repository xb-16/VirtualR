import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import user1 from "/src/assets/profile-pictures/user1.jpg";
import user2 from "/src/assets/profile-pictures/user2.jpg";
import user3 from "/src/assets/profile-pictures/user3.jpg";
import user4 from "/src/assets/profile-pictures/user4.jpg";
import user5 from "/src/assets/profile-pictures/user5.jpg";
import user6 from "/src/assets/profile-pictures/user6.jpg";

const usersImgs = [user1, user2, user3, user4, user5, user6];

export default function Testimonials() {
  const { t } = useTranslation("home");

  // ✅ testimonials come from translation JSON
  const testimonials = t("testimonials.items", { returnObjects: true }) || [];

  return (
    <section className="mt-20">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
        {t("testimonials.title")}
      </h2>
      <div className="md:flex justify-center gap-3 flex-wrap mt-12 max-md:space-y-4 max-md:mx-10">
        {testimonials.map((opinion, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-xl bg-neutral-700/50 md:w-[45%] lg:w-[30%] flex flex-col justify-between h-fit gap-5 hover:shadow-[1px_1px_3px_gray] hover:scale-102 transition-all"
          >
            <p>{opinion.text}</p>
            <div className="flex gap-3 place-items-center">
              <div className="basis-[20%]">
                <img
                  src={usersImgs[index]}
                  className="rounded-full w-15 h-15"
                  alt={opinion.user}
                />
              </div>
              <div>
                <h4 className="font-bold">{opinion.user}</h4>
                <p className="text-neutral-400">{opinion.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
