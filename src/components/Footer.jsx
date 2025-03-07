import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "/src/constants";
import logo from "/src/assets/logo.png";
export default function Footer() {
  return (
    <footer className="sm:flex space-y-8 max-sm:text-center md:max-lg:text-center flex-wrap md:[&>*]:basis-[45%] lg:[&>*]:basis-[18%] mt-20 justify-between w-[90%] mx-auto p-10 border-t-1 border-slate-500/50 [&_li_a]:hover:border-orange-600 [&_li_a]:hover:text-orange-600 [&_li_a]:border-b-2 [&_li_a]:border-transparent [&_li_a]:transition-all">
      <div className="lg:basis-[30%]! md:text-justify">
        <img className="w-30 mb-3 -mt-6 max-sm:mx-auto md:max-lg:mx-auto" src={logo} />
        <p>
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
      </div>
      <ul className="space-y-1">
        <h3 className="text-xl text-white font-medium mb-7">Resources</h3>
        {resourcesLinks.map((link) => {
          return (
            <li href={link.href}>
              <a>{link.text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="space-y-1">
        <h3 className="text-xl text-white font-medium mb-7">Plateform</h3>
        {platformLinks.map((link) => {
          return (
            <li href={link.href}>
              <a>{link.text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="space-y-1">
        <h3 className="text-xl text-white font-medium mb-7">Community</h3>
        {communityLinks.map((link) => {
          return (
            <li href={link.href}>
              <a>{link.text}</a>
            </li>
          );
        })}
      </ul>
      <h1 className="text-center mx-auto text-white bg-slate-700/15 w-fit p-3 text-nowrap">Designed By <a href="https://github.com/xb-16" target="_blank" className="underline">Ahmed Assari</a> </h1>
    </footer>
  );
}
