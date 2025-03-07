import React from "react";
import {
  BotMessageSquare,
  BatteryCharging,
  Fingerprint,
  ShieldHalf,
  PlugZap,
  GlobeLock,
} from "lucide-react";
import { features } from "../constants";

export default function Features() {
  return (
    <section className="border-b border-neutral-800 mt-20 flex flex-col gap-10 place-items-center">
      <div className="text-center bg-neutral-700 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-3 flex place-items-center uppercase w-fit mx-auto">
        Features
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mt tracking-wide">
        Easily build{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
          Your code
        </span>
      </h2>
      <div className="flex w-full flex-wrap flex-col md:flex-row md:w-[90%] lg:w-[85%]">
        {features.map((feat) => {
          return (
            <div className="w-[90%] mx-auto md:w-1/2 lg:w-1/3 p-5 flex gap-3">
              <div className="basis-fit text-amber-700 bg-slate-800 h-fit p-2 rounded-[100%]">
                {feat.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-white mt-1">{feat.text}</h3>
                <p className="text-gray-400">{feat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
