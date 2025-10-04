import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation("home");

  // ✅ pricingOptions comes from i18n JSON
  const pricingOptions = t("pricing.options", { returnObjects: true }) || [];

  return (
    <section className="mt-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-10">
        {t("pricing.title")}
      </h2>
      <div className="md:flex flex-wrap justify-between mx-15 max-sm:mx-10 lg:mx-30 max-md:space-y-4 max-md:text-center">
        {pricingOptions.map((price, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 * (index + 1) }}
            className="rounded-2xl border-slate-500/50 border px-6 py-10 md:basis-[31%] flex flex-col gap-6 hover:scale-105 transition-all"
          >
            <h4 className="text-3xl">
              {price.title}{" "}
              {price.mostPopular && (
                <span className="text-sm text-orange-500/65">
                  ({t("pricing.mostPopular")})
                </span>
              )}
            </h4>
            <p>
              <span className="text-4xl font-extrabold">{price.price} </span>
              /{t("pricing.perMonth")}
            </p>
            <ul className="space-y-4">
              {price.features.map((feat, i) => (
                <li className="flex gap-2" key={i}>
                  <CheckCircle2 /> {feat}
                </li>
              ))}
            </ul>
            <button className="rounded-xl border-orange-500/70 border-1 py-2 hover:bg-orange-600 hover:border-white transition-all tracking-wider">
              {t("pricing.subscribe")}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
