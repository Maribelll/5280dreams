import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Fancybox from "./Fancybox";

import styles from "../../styles/slider.module.scss";

import Image from "next/image";
import image1 from "../../public/slider/rent/1.JPG";
import image2 from "../../public/slider/rent/2.JPG";
import image3 from "../../public/slider/rent/3.JPG";
import image4 from "../../public/slider/rent/4.JPG";
import image5 from "../../public/slider/rent/5.JPG";
import image6 from "../../public/slider/rent/6.JPG";
import image7b from "../../public/slider/rent/7b.JPG";
import image7c from "../../public/slider/rent/7c.JPG";
import image7d from "../../public/slider/rent/7d.JPG";
import image8 from "../../public/slider/rent/8.jpg";
import image9 from "../../public/slider/rent/9.jpg";

import image10 from "../../public/slider/rent/10.JPG";

import image11 from "../../public/slider/rent/11.JPG";
import image12 from "../../public/slider/rent/12.JPG";
import image13 from "../../public/slider/rent/13.JPG";
import image14 from "../../public/slider/rent/14.JPG";
import image15 from "../../public/slider/rent/15.JPG";
import image16 from "../../public/slider/rent/16.JPG";
import image17 from "../../public/slider/rent/17.JPG";
import image18 from "../../public/slider/rent/18.JPG";
import image19 from "../../public/slider/rent/20a.JPG";

export default function Sliderrent() {
  return (
    <div className={styles.container_slider}>
      <Fancybox>
        <Swiper
          style={{
            maxWidth: "1346px",
          }}
          modules={[Navigation]}
          centeredSlides={true}
          initialSlide={1}
          speed={1000}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            clickable: true,
          }}
          // loop={true}
          breakpoints={{
            1445: {
              spaceBetween: 71,
              slidesPerView: 2,
            },
            950: {
              spaceBetween: 71,
              slidesPerView: 2,
            },
            760: {
              spaceBetween: 90,
              slidesPerView: 1.5,
            },
            400: {
              spaceBetween: 20,
              slidesPerView: 1.1,
            },
          }}
        >
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110044/rent/slider-auto/1_daksn4.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image1}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110044/rent/slider-auto/2_a9hhxw.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image2}
                alt="slide2"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110041/rent/slider-auto/3_uduo1e.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image3}
                alt="slide3"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110041/rent/slider-auto/4_rt5lfg.jpg"
            >
              <Image
                className={styles.imageSlide}
                id={styles.vertical}
                src={image4}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110041/rent/slider-auto/5_a1wek7.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image5}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110041/rent/slider-auto/6_dutj8g.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image6}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110041/rent/slider-auto/7b_us2jpm.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image7b}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110041/rent/slider-auto/7c_ovspqu.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image7c}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110042/rent/slider-auto/7d_stywlh.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image7d}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110042/rent/slider-auto/8_jfiy78.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image8}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110042/rent/slider-auto/9_qnostw.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image9}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110042/rent/slider-auto/10_kjtxma.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image10}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110042/rent/slider-auto/11_if8kkf.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image11}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110042/rent/slider-auto/12_nozfdl.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image12}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110043/rent/slider-auto/13_aq0mts.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image13}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110043/rent/slider-auto/14_rt5b6r.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image14}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110043/rent/slider-auto/15_mit9oj.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image15}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110043/rent/slider-auto/16_ysp52q.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image16}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110043/rent/slider-auto/17_xvilvd.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image17}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110043/rent/slider-auto/18_rfyaeq.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image18}
                alt="land"
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110044/rent/slider-auto/20a_kyj36t.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={image19}
                alt="land"
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
