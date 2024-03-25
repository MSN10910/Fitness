'use client'

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "Transform Your Life, One Rep at a Time";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((prevText) =>
        prevText === targetText ? prevText : targetText.substring(0, prevText.length + 1)
      );
    }, 100);

    return () => clearInterval(typingInterval);
  }, [typedText]);

  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left nb-2"
            >
              <span>{typedText}</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left nb-4"
            >
              "The only bad workout is the one that didn't happen." - Unknown
            </motion.p>
            
          </div>
        </div>
      </SwiperSlide>
      {/* Add other slides */}
      {/* swiper nav buttons */}
  
    </Swiper>
  );
};

export default HeroSlider;
