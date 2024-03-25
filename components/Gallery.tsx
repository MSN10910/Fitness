"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";

//components
import SwiperNavButtons from "./SwiperNavButtons";
import Image from "next/image";


import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const blogData = [
  {
    img: "/assets/img/blog/BM2.jpg",
  },
  {
    img: "/assets/img/blog/BlackMoses1.jpg",
  },
  {
    img: "/assets/img/blog/BM3.jpeg",
  },

  {
    img: "/assets/img/blog/BM4.jpeg",

  },
  {
    img: "/assets/img/blog/BM5.jpeg",
  },
  {
    img: "/assets/img/blog/BM6.jpg",
  },
  {
    img: "/assets/img/blog/BM7.jpg",
  },
];

const Gallery = () => {
  return (
    <section className="bg-black text-white py-24" id="blog">
      <div className="cotainer mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Gallery
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                  <Image
  src={post.img}
  width={320}
  height={320 } 
  alt=""
  className="mb-6"
/>

                  </div>
                </SwiperSlide>
              );
            })}
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
        btnStyles="text-accent border border-accent rounded-full w-[48px] h-[48px] flex justify-center items-center hover:bg-accent-light transition-all duration-300"
        iconStyles="text-2xl"
      />

          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
