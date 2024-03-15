"use client";
import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "Excellent trainers",
    subtitle: "Elevate Your Fitness Experience with Our Exceptional Trainers",
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent prices",
    subtitle: "Unbeatable Value: Experience Excellence at Affordable Prices",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle: "Empower Your Workouts: Harness the Power of Modern Equipment",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            At Marurui Gym, we&apos;re committed to your fitness journey, offering
            expert guidance and top-notch facilities, but it&apos;s not just the
            stuff you&apos;d expect from a gym, it&apos;s the extra value too. Think new
            friends friendly teams and a judgement-free space to workout and
            feel-good in. Marurui Gym.
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10"
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[88px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        ></motion.div>
        <Achievements />
      </div>
    </section>
  );
};

export default About;
