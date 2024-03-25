"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";

//components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const blogData = [
  {
    img: "/assets/img/blog/download.jpg",
    date: "March 10, 2024",
    title:
      "MIKE TYSON VS. JAKE PAUL IS ANNOUNCED AND IMMEDIATELY KO’S THE INTERNET",
    href: "https://www.givemesport.com/what-are-the-rules-for-mike-tyson-vs-jake-paul/",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "WOMEN WHO LIFT LIVE LONGER, ACCORDING TO NEW STUDY",
    href: "https://www.muscleandfitness.com/features/feature-news/women-who-lift-live-longer-says-new-study/",
  },

  {
    img: "/assets/img/blog/classic1.jpg",
    date: "March 9, 2024",
    title: "HADI CHOOPAN WINS 2024 ARNOLD CLASSIC, SENDS MESSAGE TO LUNSFORD",
    href: "https://www.tehrantimes.com/news/495641/Hadi-Choopan-wins-2024-Arnold-Classic",
  },
  {
    img: "/assets/img/blog/stretch.jpg",
    date: "Nov 2, 2023",
    title:
      "WHICH TYPE OF STRETCHING IS BEST FOR YOU? HERE’S WHAT YOU NEED TO KNOW",
    href: "https://www.muscleandfitness.com/workouts/workout-tips/everything-you-need-to-know-about-stretchingpage-sep-sitename/",
  },
  {
    img: "/assets/img/blog/mental.jpg",
    date: "Nov 2, 2023",
    title:
      "MEN’S MENTAL HEALTH: STRUGGLING WITH ANXIETY, PTSD, AND DEPRESSION IN SILENCE",
    href: "https://www.muscleandfitness.com/features/from-our-partners/mens-mental-health-struggling-with-anxiety-ptsd-and-depression-in-silence/",
  },
  {
    img: "/assets/img/blog/skincare.jpg",
    date: "Oct 10, 2023",
    title: "THIS SKIN CARE GUIDE WILL PREPARE YOU FOR ALL SEASONS",
    href: "https://www.muscleandfitness.com/anti-aging/wellness/this-skin-care-guide-will-prepare-you-for-all-seasons/",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "Oct 4, 2023",
    title:
      "TIPS FOR WOMEN TO HELP OVERCOME HORMONAL HURDLES IN BUILDING MUSCLE",
    href: "https://www.muscleandfitness.com/muscle-fitness-hers/hers-features/guide-to-overcoming-female-hormones-to-lose-weight-page-sep-sitename/",
  },
];

const Blog = () => {
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
          Blogs
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
                      height={266}
                      alt=""
                      className="mb-6"
                    />
                    <div className="flex flex-col items-start">
                      <p className="max-m-[388px] uppercase text-[12px] tracking-[3px] mb-1">
                        {post.date}
                      </p>
                      <Link href={post.href} target="_blank">
                        <h5 className="h5">{post.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
