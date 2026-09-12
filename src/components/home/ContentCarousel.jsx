import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// รูปจาก src/assets
import img01 from "../../assets/01.png";
import img02 from "../../assets/02.png";
import img03 from "../../assets/03.png";
import img04 from "../../assets/04.png";
import img05 from "../../assets/05.png";
import img06 from "../../assets/06.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ContentCarousel = () => {
  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
  ];

  return (
    <div>
      {/* รูปใหญ่ด้านบน */}
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-80 rounded-md mb-4"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt={`banner-${i + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* รูปเล็กด้านล่าง */}
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-md"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt={`slide-${i + 1}`}
              className="w-full h-52 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;