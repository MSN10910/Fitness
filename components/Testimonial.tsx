"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Pagination } from "swiper/modules";

//import styles
import "swiper/css";
import "swiper/css/pagination";

//tewstimonial data
const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Joining the gym was the best decision of my life! Thanks to the supportive trainers and motivating atmosphere, I've never felt stronger and more confident.",
    name: "Sarah J",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "I've been a member for six months now, and I've already seen amazing results. The workouts are challenging but rewarding, and the staff is incredibly helpful.",
    name: "Michael A",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "I was hesitant to start my fitness journey, but the welcoming environment at this gym made me feel right at home. Now, I can't imagine my life without it!",
    name: "Maria A",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "As a busy professional, finding time for exercise was always a challenge. But this gym's flexible hours and convenient location make it easy to prioritize my health.",
    name: "Lucy A",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Whether you're a beginner or a seasoned athlete, this gym has something for everyone. The trainers are knowledgeable, and the facilities are top-notch. Highly recommend!",
    name: "Maria A",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="h2 text-center">Testimonials</motion.h2>
        <motion.div
             variants={fadeIn('up', 0.6)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.2 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">{person.message}</p>
                      <span>{person.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
