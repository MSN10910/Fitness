"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

//variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: 'linear',
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-black pt-24">
      <div className="container mx-auto pb-24">
        <motion.div 
        variants={footerContainerVariant}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* Info */}
          <motion.div  variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">
              Marurui Gym Fitness For Less
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Marurui, Nairobi</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(254)722-549-896</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>maruruigym@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>


          {/* gallery */}
          <motion.div variants={footerItem} >
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery images */}
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BM6.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BM5.jpeg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BM2.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BM4.jpeg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BM3.jpeg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BM7.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/BlackMoses1.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
          {/* newsletter*/}

        </motion.div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Marurui Gym</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link href='#' className="text-white hover:text-accent transition-all">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href='#' className="text-white hover:text-accent transition-all">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href='#' className="text-white hover:text-accent transition-all">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
