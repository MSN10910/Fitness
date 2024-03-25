'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
    {
    name: "Cardio",
    img: "/assets/img/classes/cardio.gif",
    description: " Elevate your heart rate and boost your endurance with our cardio classes. Designed to improve cardiovascular health and burn calories, these high-energy workouts offer a variety of cardio exercises such as running, cycling, and jumping rope. "
      
  },
  {
    name: "Boxing",
    img: "/assets/img/classes/boxing.gif",
    description:
      "Punch, jab, and hook your way to a stronger, leaner body with our boxing strength training classes. Our boxing classes offer a dynamic and intense workout that combines cardio, strength training, and self-defense techniques.",
  },
  {
    name: "Zumba",
    img: "/assets/img/classes/zumba.gif",
    description:
      "Join the party and groove your way to fitness with our Zumba dance classes. This exhilarating workout combines Latin and international music with easy-to-follow dance moves, making it perfect for all fitness levels. ",
  },
  {
    name: "Mzuzi Obstacle Course",
    img: "/assets/img/classes/mzuzi.png",
    description:
      " Get ready for an adrenaline-fueled adventure with our obstacle course classes. Navigate through a variety of challenging obstacles designed to test your agility, strength, and endurance. ",
  },
  {
    name: "Aerobics",
    img: "/assets/img/classes/aerobics.webp",
    description: "Join our aerobics classes for a fun and effective way to improve cardiovascular health, burn calories, and tone muscles."
      
  },
  {
    name: "Katabox",
    img: "/assets/img/classes/katabox.jpg",
    description: "Experience the fusion of martial arts and boxing in our Katabox classes. This high-intensity workout incorporates elements of karate, kickboxing, and traditional boxing techniques to deliver a full-body challenge."
      
  },
];


const Classes = () => {
  return (
    <section  className='bg-black' id="class">
      <h4 className="h2 text-center mb-6">Transform Your Fitness Journey: Explore Our Diverse Range of Classes</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {classes.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-black rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center"
          >
            <div className="relative w-full h-[200px]">
              <Image src={item.img} fill className="object-cover" alt="" />
            </div>
            <div className="p-4">
              <motion.h3 className="h3 text-accent">{item.name}</motion.h3>
              <motion.p className="text-white">{item.description}</motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Classes;

