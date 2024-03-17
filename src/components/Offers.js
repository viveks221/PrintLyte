import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import offer from "../Images/offer.png";
import offer1 from "../Images/offer1.png";
import offer2 from "../Images/offer2.png";
import offer3 from "../Images/offer3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
const Offers = () => {
  return (
    <Box overflowX="hidden" width="80%" height={550} marginLeft={4}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={offer} width={"100%"} height={350} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={offer1} width={"100%"} height={350} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={offer2} width={"100%"} height={350} />
        </SwiperSlide>
      </Swiper>
      <Flex>
        <Image padding={2} src={offer1} width={"33%"} height={195} />
        <Image padding={2} src={offer2} width={"33%"} height={195} />
        <Image padding={2} src={offer3} width={"34%"} height={195} />
      </Flex>
    </Box>
  );
};

export default Offers;
