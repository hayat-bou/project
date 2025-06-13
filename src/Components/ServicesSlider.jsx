import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaBullseye, FaRobot, FaMobileAlt, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Brand Strategy",
    description: "We develop comprehensive brand strategies that align with your business goals.",
    icon: <FaBullseye size={30} className="text-yellow-400" />,
  },
  {
    title: "AI-Powered Marketing",
    description: "Our team creates engaging and compelling content that reflects your brand's voice.",
    icon: <FaRobot size={30} className="text-yellow-400" />,
  },
  {
    title: "Mobile App Design",
    description: "We design intuitive, high-performance mobile applications that align with your brand’s identity.",
    icon: <FaMobileAlt size={30} className="text-yellow-400" />,
  },
  {
    title: "Digital Marketing",
    description: "Our digital marketing services improve your brand's visibility and maximize both reach and engagement.",
    icon: <FaChartLine size={30} className="text-yellow-400" />,
  },
];

const ServicesSlider = () => {
  return (
    <div className="w-full md:w-[420px] bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/30">
      <h2 className="text-3xl font-bold mb-6 text-white text-center underline decoration-yellow-300 decoration-4 underline-offset-8">
        Our Services
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 shadow-lg hover:shadow-yellow-200 transition duration-300 ease-in-out h-[220px] flex flex-col justify-center items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-100 text-sm">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
