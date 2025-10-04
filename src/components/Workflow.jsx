import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImage from "/src/assets/code.jpg";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

export default function Workflow() {
  const { t } = useTranslation("home");

  const checklistItems = t("workflow.checklist", { returnObjects: true }) || [];

  return (
    <section className="mt-20 flex flex-col gap-13">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center tracking-wide">
        <Trans
          i18nKey="workflow.title"
          ns="home"
          components={{
            1: (
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text" />
            ),
          }}
        />
      </h2>

      <div className="flex lg:w-[80%] md:gap-2 gap-6 mx-auto flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center">
          <img src={codeImage} className="w-[70%] md:w-[80%]" />
        </div>

        <div className="space-y-3 w-[90%] mx-auto md:w-[60%]">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex gap-4"
            >
              <CheckCircle2 color="lightgreen" className="mt-1" />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
