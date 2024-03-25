"use client";
import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers style={{ color: 'white' }} />,
    title: "Excellent trainers",
    subtitle: "Elevate Your Fitness Experience with Our Exceptional Trainers",
  },
  {
    icon: <IoIosPricetag style={{ color: 'white' }} />,
    title: "Excellent prices",
    subtitle: "Unbeatable Value: Experience Excellence at Affordable Prices",
  },
  {
    icon: <FaDumbbell style={{ color: 'white' }} />,
    title: "Modern equipment",
    subtitle: "Empower Your Workouts: Harness the Power of Modern Equipment",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about" style={{ backgroundColor: 'black' }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center text-white"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center text-white"
          >
            Marurui Gym is more than just a fitness center. As a part of the young lions hearts Sports, a community-based organization, we are committed to making a positive impact on the health and well-being of our community. Our innovative approach focuses not only on physical fitness but also on fostering a supportive environment where everyone feels valued and included.<br/><br/> We believe in the power of community and aim to provide a judgment-free space where individuals can work out, make new friends, and feel good about themselves. Additionally, Marurui Gym is actively involved in the fight against drug abuse, offering support and resources to those in need.
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.4)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[88px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p className="text-white">{feature.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
