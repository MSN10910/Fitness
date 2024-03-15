"use client";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Pagination } from "swiper/modules";

//import styles
import "swiper/css";
import "swiper/css/pagination";

//membership data

const membershipData = [
  {
    title: "Daily",
    price: "100",
    benefits: [
      {
        icon: FaCheck,
        text: "Access all gym facilities",
      },
      {
        icon: MdClose,
        text: "Includes Membership",
      },
      {
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: MdClose,
        text: "Health and Fitness tips",
      },
      {
        icon: MdClose,
        text: "Mon-Fri gym access",
      },
      {
        icon: MdClose,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "Addition amenities",
      },
    ],
  },
  {
    title: "Weekly",
    price: "500",
    benefits: [
      {
        icon: FaCheck,
        text: "Access all gym facilities",
      },
      {
        icon: MdClose,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: MdClose,
        text: "Health and Fitness tips",
      },
      {
        icon: FaCheck,
        text: "Mon-Sun gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: MdClose,
        text: "Addition amenities",
      },
    ],
  },
  {
    title: "monthly",
    price: "1500",
    benefits: [
      {
        icon: FaCheck,
        text: "Access all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and Fitness tips",
      },
      {
        icon: FaCheck,
        text: "Mon-Sun gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "Addition amenities",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
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
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[60px] border-b border-accent">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefits */}
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {item.benefits.map((item, index) => {
                    return (
                      <li className="flex items-center gap-2" key={index}>
                        <item.icon className="text-accent text-lg" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* price & button */}
                <p className="text-accent mb-8 flex gap-1 items-center">
                  <sup>Kes</sup>
                  <strong style={{ fontSize: '50px' }}>{item.price}</strong>


                </p>
                
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
