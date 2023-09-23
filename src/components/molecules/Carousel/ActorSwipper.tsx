import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CardSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

interface ActorTypes {
  items: {
    profile_path: string;
    original_title: string;
    original_name: string;
    character: string;
    id: string;
  }[];
  title: string;
}

const ActorSwipper = ({ items, title }: ActorTypes) => {
  console.log(items);
  const BASE_IMG_URL = import.meta.env.VITE_APP_BASEIMAGEURL;
  console.log(BASE_IMG_URL);
  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold text-white mb-3 ms-3">{title}</h1>
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
          items.slice(0, 15).map((item, i: number) => {
            return (
              <SwiperSlide key={i}>
                <div className="actor-container">
                  <div className="bg-white hover:opacity-50 relative flex justify-center">
                    <img
                      src={`${BASE_IMG_URL}${item?.profile_path}`}
                      alt={item?.original_title}
                    />
                    <div className="actor-info">
                      <h1 className="text-[14px] lg:text-[30px] font-semibold text-slate-300 border-1">
                        {item.original_name}
                      </h1>
                      <p className="text-slate-300">as</p>
                      <h1 className="text-[14px] lg:text-[30px] font-semibold text-slate-300 border-1">
                        {item.character}
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ActorSwipper;
