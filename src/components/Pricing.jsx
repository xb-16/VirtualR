import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-10">
        Pricing
      </h2>
      <div className="md:flex flex-wrap justify-between mx-15 max-sm:mx-10 lg:mx-30 max-md:space-y-4 max-md:text-center">
        {pricingOptions.map((price) => {
          return (
            <div className="rounded-2xl border-slate-500/50 border px-6 py-10 md:basis-[31%] flex flex-col gap-6 hover:scale-105 transition-all">
              <h4 className="text-3xl">
                {price.title}{" "}
                {price.title == "Pro" ? (
                  <span className="text-sm text-orange-500/65">
                    {" "}
                    (Most Popular)
                  </span>
                ) : (
                  ""
                )}
              </h4>
              <p>
                <span className="text-4xl font-extrabold">{price.price} </span>
                /Month
              </p>
              <ul className="space-y-4">
                {price.features.map((feat) => {
                  return (
                    <li className="flex gap-2">
                      <CheckCircle2 /> {feat}
                    </li>
                  );
                })}
              </ul>
              <button className="rounded-xl border-orange-500/70 border-1 py-2 hover:bg-orange-600 hover:border-white transition-all tracking-wider">
                Subscribe
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
