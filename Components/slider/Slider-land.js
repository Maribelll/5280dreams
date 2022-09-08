import { EffectCreative, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Fancybox from "./Fancybox";

import styles from "../../styles/slider.module.scss";
import Image from "next/image";

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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642678/rent/slider-land/photo%20in%20land%20slider/image2_ol7l0i.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642678/rent/slider-land/photo%20in%20land%20slider/image3_c3ryf1.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642678/rent/slider-land/photo%20in%20land%20slider/image4_tdypcj.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642678/rent/slider-land/photo%20in%20land%20slider/image5_jfeh1s.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642678/rent/slider-land/photo%20in%20land%20slider/image6_wmngbf.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642679/rent/slider-land/photo%20in%20land%20slider/image7_eyacgm.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642679/rent/slider-land/photo%20in%20land%20slider/image8_xcaxfu.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642679/rent/slider-land/photo%20in%20land%20slider/image9_j2yssj.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642679/rent/slider-land/photo%20in%20land%20slider/image10_noyg3e.jpg"
                }
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662642678/rent/slider-land/photo%20in%20land%20slider/image1_dsqls0.jpg"
                }
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
