import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

const Hero = () => {
  // Queries
  const getSliders = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/slider");
    return data;
  };
  const { data: sliders } = useQuery({
    queryKey: ["sliders"],
    queryFn: getSliders,
  });
  console.log(sliders);
  return (
    <div id="heroSection" className="bg-[#FFFFFF] my-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="border border-4 border-[#457431] p-5">
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              height={250}
              slidesPerGroup={1}
              effect={"fade"}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {sliders?.data ? (
                sliders?.data?.map((slider) => {
                  return (
                    <div key={slider._id} className="h-[300px] overflow-hidden">
                      <SwiperSlide>
                        <img
                          className="w-full h-full object-cover"
                          src={slider?.img}
                          alt=""
                        />
                      </SwiperSlide>
                    </div>
                  );
                })
              ) : (
                <h1>No slider found</h1>
              )}
            </Swiper>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl mb-8">
          Software engineer with a broad mix of experience in full-stack technologies. A teachable and resilient professional.
          </h1>
          <p>
          Cristiane is a highly dedicated professional. A Software engineer with a broad mix of experience in full-stack technologies. She is teachable and resilient possessing good interpersonal skills to be a team player.
          </p>
          <div className="mt-8 text-center">
            <button className="px-10 py-2 bg-[#9CCC65] hover:bg-[#9CCC65]" >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
