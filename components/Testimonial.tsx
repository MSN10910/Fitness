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
    img: "/assets/img/testimonial/Robert.png",
    message:
      "Lovely place",
    name: "Robert Ngotho",
  },
  
  {
    img: "/assets/img/testimonial/Wambui.png",
    message: 
      "Two months in, I have gained so much strength and knowledge courtesy of the owner. He is patient and very helpful. Facilities are great and it has a very supportive community within it. I would highly recommend it.",
    name: "Wambui Githenya",
  },
  {
    img: "/assets/img/testimonial/David.png",
    message:
      "It's decent. I like it. The owner is so committed and helpful.",
    name: "Karani Desmond",
  },
  {
    img: "/assets/img/testimonial/Louis.png",
    message:
      "Not the largest of gyms but it will help you achieve your fitness goals. Its also very affordable.",
    name: "Louis",
  },
  {
    img: "/assets/img/testimonial/Victor.png",
    message:
      "The next big thing",
    name: "Cristopher Mwangi",
  },
  

];

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial" style={{ background: "black" }}>
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center text-white"
        >
          Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
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
                      <p className="max-w-[380px] mb-4 text-white">{person.message}</p>
                      <span className="text-white">{person.name}</span>
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



