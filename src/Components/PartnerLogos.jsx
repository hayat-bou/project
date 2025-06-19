import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  "MOOVUP",
  "FDAYOU SERVICES",
  "AGRI EXOTIC",
  "SMHSolution",
  "FGC",
  "MIRAI",
];

const PartnerLogos = () => {
  return (
    <div className="w-full flex justify-end mb-10">
      <div className="w-[70%] py-2">
        <div className="bg-white rounded-tl-full p-10 translate-y-8"> 
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((name, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-300 py-6 px-4 rounded-full text-center shadow-md border-2 border-[#66ff00]">
                  <p className="text-base font-semibold text-gray-800">
                    {name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
