'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Sculpt your muscles and build strength with our intense bodybuilding classes. Perfect for those looking to bulk up and define their physique.",
  },
  {
    name: "Cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Get your heart racing and burn calories with our high-energy cardio classes. From indoor cycling to dance cardio, we've got something for everyone.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Mix up your routine and challenge your body with our fitness fusion classes. Combining elements of strength training, cardio, and flexibility, these classes offer a full-body workout.",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Take your fitness to the next level with our CrossFit classes. Push your limits, build endurance, and improve functional strength with dynamic workouts designed to test your capabilities.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <h4 className="h2 text-center mb-6">Transform Your Fitness Journey: Explore Our Diverse Range of Classes</h4>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
              key={index}
            >
              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              {/* text & button */}
              <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.description}
                </motion.p>

              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
