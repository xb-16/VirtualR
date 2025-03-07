import React from "react";
import { testimonials } from "/src/constants";

import user1 from "/src/assets/profile-pictures/user1.jpg";
import user2 from "/src/assets/profile-pictures/user2.jpg";
import user3 from "/src/assets/profile-pictures/user3.jpg";
import user4 from "/src/assets/profile-pictures/user4.jpg";
import user5 from "/src/assets/profile-pictures/user5.jpg";
import user6 from "/src/assets/profile-pictures/user6.jpg";

let usersImgs = [user1,user3,user5, user4, user5, user1];

export default function Testemonials() {
  return (
    <section className="mt-20">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
        What People are saying
      </h2>
      <div className="md:flex justify-center gap-3 flex-wrap mt-12 max-md:space-y-4 max-md:mx-10">
        {testimonials.map((opinion, index) => {
          return (
            <div className="p-5 rounded-xl bg-neutral-700/50 md:w-[45%] lg:w-[30%] w-100% flex flex-col justify-between h-fit gap-5 hover:shadow-[1px_1px_3px_gray] hover:scale-102 transition-all">
              <p>{opinion.text}</p>
              <div className="flex gap-3 place-items-center">
                <div className="basis-[20]! flex">
                  <img src={usersImgs[index]} className="rounded-[100%] w-15 h-15 max-w-auto"/>
                </div>
                <div>
                  <h4 className="font-bold">{opinion.user}</h4>
                  <p className="text-neutral-400">{opinion.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
