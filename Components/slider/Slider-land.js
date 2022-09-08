import { EffectCreative, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Fancybox from "./Fancybox";

import styles from "../../styles/slider.module.scss";
import Image from "next/image";
import image1 from "../../public/slider/land/image1.JPG";
import image2 from "../../public/slider/land/image2.JPG";
import image3 from "../../public/slider/land/image3.JPG";
import image4 from "../../public/slider/land/image4.JPG";
import image5 from "../../public/slider/land/image5.JPG";
import image6 from "../../public/slider/land/image6.JPG";
import image7 from "../../public/slider/land/image7.JPG";
import image8 from "../../public/slider/land/image8.jpg";
import image9 from "../../public/slider/land/image9.JPG";
import image10 from "../../public/slider/land/image10.JPG";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

export default function Sliderland() {
  return (
    <div className={styles.container_slider}>
      <Fancybox>
        <Swiper
          className={styles.swiper}
          style={{
            maxWidth: "2300px",
          }}
          modules={[Navigation, EffectCreative]}
          centeredSlides={true}
          initialSlide={1}
          speed={1000}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            clickable: true,
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev",
          }}
          // loop={true}
          breakpoints={{
            2100: {
              spaceBetween: 71,
              slidesPerView: 3,
            },
            2050: {
              spaceBetween: 71,
              slidesPerView: 3,
            },
            1700: {
              spaceBetween: 71,
              slidesPerView: 2.5,
            },
            1445: {
              spaceBetween: 71,
              slidesPerView: 2,
            },
            950: {
              spaceBetween: 71,
              slidesPerView: 2,
            },
            760: {
              spaceBetween: 71,
              slidesPerView: 1.5,
            },
            600: {
              spaceBetween: 71,
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886594/rent/slider-land/image2_i6yv3a.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image2}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886592/rent/slider-land/image3_nsdyrj.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image3}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886591/rent/slider-land/image4_kxzckt.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image4}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886592/rent/slider-land/image5_lgnv74.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image5}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886593/rent/slider-land/image6_dnadrl.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image6}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886593/rent/slider-land/image7_kwszk6.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image7}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886593/rent/slider-land/image8_uxo9xx.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image8}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886594/rent/slider-land/image9_itgnql.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image9}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886593/rent/slider-land/image10_ayv0nt.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image10}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1661886592/rent/slider-land/image1_hetxjw.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image1}
                alt="Land for sale in Sedalia, MO."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </Fancybox>
    </div>
  );
}
