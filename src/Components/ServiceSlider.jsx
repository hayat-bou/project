import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {
  FaBullseye, FaRobot, FaMobileAlt,
  FaChartLine, FaCode, FaLightbulb, FaShieldAlt
} from "react-icons/fa";

const services = [
  { title: "Brand Strategy", description: "We develop comprehensive brand strategies that align with your business goals.", icon: <FaBullseye className="text-3xl" /> },
  { title: "AI-Powered Marketing", description: "Harnessing Artificial Intelligence to Optimize Your Marketing Strategies for Maximum Impact", icon: <FaRobot className="text-3xl" /> },
  { title: "Mobile App Design", description: "We design intuitive, high-performance mobile applications that align with your brand’s identity.", icon: <FaMobileAlt className="text-3xl" /> },
  { title: "Digital Marketing", description: "Our digital marketing services improve your brand's visibility and maximize engagement.", icon: <FaChartLine className="text-3xl" /> },
  { title: "Développement", description: "Sites web personnalisés", icon: <FaCode className="text-3xl" /> },
  { title: "Innovation", description: "Pushing boundaries with forward-thinking strategies that elevate brands in a competitive landscape.", icon: <FaLightbulb className="text-3xl" /> },
  { title: "Sécurité", description: "Protection des données", icon: <FaShieldAlt className="text-3xl" /> }
];

const ServiceSlider = () => {
  return (
    <div className="w-full max-w-sm text-center">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        className="!pb-8"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="p-4 rounded-xl shadow-md h-56 flex flex-col justify-center items-center text-center mx-6 bg-black/70 border"
              style={{ borderColor: "#66ff00" }}
            >
              <div style={{ color: "#66ff00" }}>
                {service.icon}
              </div>
              <h3
                className="font-semibold text-sm mt-4"
                style={{ color: "#66ff00" }}
              >
                {service.title}
              </h3>
              <p className="text-white text-lg mt-4 px-4">
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
