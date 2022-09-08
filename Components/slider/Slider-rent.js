import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Fancybox from "./Fancybox";

import styles from "../../styles/slider.module.scss";

import Image from "next/image";

export default function Sliderrent() {
  return (
    <div className={styles.container_slider}>
      <Fancybox>
        <Swiper
          className={styles.swiper}
          style={{
            maxWidth: "2300px",
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
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662110044/rent/slider-auto/1_daksn4.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/1_oibq4i.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/2_ln1b1u.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/3_twnb3i.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/4_jr60qm.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/5_cdxz1p.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/6_qbq0t6.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/7b_h9mk9p.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/7c_klnkq2.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/7d_bu37tn.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/8_weue57.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/9_dd7nfn.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/10_jozlt4.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/11_uwgodk.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/12_auxtsh.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/13_upmlmt.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/14_pf4mzq.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/15_jm9fgu.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637398/rent/slider-auto/photo%20in%20rv%20slide/16_i20hjw.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637399/rent/slider-auto/photo%20in%20rv%20slide/17_nfwwpg.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637399/rent/slider-auto/photo%20in%20rv%20slide/18_dfwp8l.jpg"
                }
                alt="Class A RV for rent in Denver."
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
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662637397/rent/slider-auto/photo%20in%20rv%20slide/1_oibq4i.jpg"
                }
                alt="Class A RV for rent in Denver."
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
