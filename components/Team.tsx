"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerdata = [
  {
    image: "/assets/img/trainers/BlackMoses1.jpg",
    name: "Moses Njenga",
    role: "Body builder coach",
    description:
      "Meet our seasoned bodybuilder trainer, dedicated to helping you reach your bodybuilding goals, he'll craft personalized workout routines tailored to your unique strengths and areas for improvement.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-6">Trainers</h2>
        {/* trainers grid */}
        <div className="items-center">
          {trainerdata.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4 style={{ zIndex:  }}">
                  <Image src={trainer.image} fill alt="" />
                </div>
                {/* name*/}
                <motion.h4
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h4 mb-2"
                >
                  {trainer.name}
                </motion.h4>
                {/* role */}
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="uppercase text-xs tracking-[3px] mb-2"
                >
                  {trainer.role}
                </motion.p>
                {/* description */}
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-6"
                >
                  {trainer.description}
                </motion.p>
                {/* socials */}
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex gap-12 justify-center"
                >
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
        {/* btn */}
      </div>
    </section>
  );
};

export default Team;
