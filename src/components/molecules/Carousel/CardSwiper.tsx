import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CardSwiper.css";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

interface CardTypes {
  items: {
    poster_path: string;
    original_title: string;
    id: string;
  }[];
  title: string;
}

const CardSwiper = ({ items, title }: CardTypes) => {
  const BASE_IMG_URL = import.meta.env.VITE_APP_BASEIMAGEURL;

  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold text-white mb-3">{title}</h1>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        className="mySwiper"
        breakpoints={{
          // Tampilan mobile
          0: {
            slidesPerView: 3,
          },
          // Tampilan desktop (md)
          768: {
            slidesPerView: 7,
          },
        }}
      >
        {items &&
          items.map((item, i: number) => {
            return (
              <SwiperSlide key={i}>
                <Link to={"detail/" + item?.id}>
                  <div className="bg-white hover:opacity-50">
                    <img
                      src={`${BASE_IMG_URL}${item?.poster_path}`}
                      alt={item?.original_title}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
