import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Fancybox from "./Fancybox";

import styles from "../../styles/slider.module.scss";
import Image from "next/image";
import image1 from "../../public/slider/home/1.JPG";
import image2 from "../../public/slider/home/2.JPG";
import image3 from "../../public/slider/home/3.JPG";
import image4 from "../../public/slider/home/4.JPG";
import image5 from "../../public/slider/home/5.JPG";
import image6 from "../../public/slider/home/6.JPG";
import image7 from "../../public/slider/home/7.JPG";
import image8 from "../../public/slider/home/8.JPG";
import image9 from "../../public/slider/home/9.JPG";
import image10 from "../../public/slider/home/10.JPG";

import image11 from "../../public/slider/home/11.JPG";
import image12 from "../../public/slider/home/12.JPG";
import image13 from "../../public/slider/home/13.JPG";
import image14 from "../../public/slider/home/14.JPG";
import image15 from "../../public/slider/home/15.JPG";
import image16 from "../../public/slider/home/16.JPG";
import image17 from "../../public/slider/home/17.JPG";
import image18 from "../../public/slider/home/18.JPG";
import image19 from "../../public/slider/home/19.JPG";
import image20 from "../../public/slider/home/20.JPG";

import image21 from "../../public/slider/home/21.JPG";
import image22 from "../../public/slider/home/22.JPG";
import image23 from "../../public/slider/home/23.JPG";
import image24 from "../../public/slider/home/24.JPG";
import image25 from "../../public/slider/home/25.JPG";
import image26 from "../../public/slider/home/26.jpg";
import image27 from "../../public/slider/home/27.JPG";
import image28 from "../../public/slider/home/28.JPG";
import image29 from "../../public/slider/home/29.JPG";
import image30 from "../../public/slider/home/30.JPG";

import image31 from "../../public/slider//home/31.JPG";
import image32 from "../../public/slider/home/32.JPG";
import image33 from "../../public/slider/home/33.JPG";
import image34 from "../../public/slider/home/34.JPG";
import image35 from "../../public/slider/home/35.JPG";
import image36 from "../../public/slider/home/36.JPG";
import image37 from "../../public/slider/home/37.JPG";
import image38 from "../../public/slider/home/38.JPG";
import image39 from "../../public/slider/home/39.JPG";
import image40 from "../../public/slider/home/40.JPG";

import image41 from "../../public/slider/home/41.jpg";
import image42 from "../../public/slider/home/42.jpg";
import image43 from "../../public/slider/home/43.JPG";
import image44 from "../../public/slider/home/44.jpg";
import image45 from "../../public/slider/home/45.JPG";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Sliderhome() {
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
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/1_oprynt.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/1_ucfxjq.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/2_eyzb9f.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/2_tpalt9.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/3_utrm4r.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/3_vqf0wz.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/4_zbte81.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/4_puiekc.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/5_izf3bv.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/5_ds8wgl.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/6_gm71bu.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/6_nq5ypc.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/7_zc4bgd.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/7_gyowv7.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/8_hj5h9j.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643177/rent/slider-home/photo%20home%20in%20slider/8_h2zlbg.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/9_moeo8p.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/9_qjkwpv.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/10_hnsgz9.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/10_pytbv3.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/11_tuwpv2.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/11_blauu9.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/12_n4udq5.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/12_fgpz0a.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/13_kttcmc.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/13_njjxbx.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/14_vopnve.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/14_mzonqp.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/15_bx6vfw.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/15_ecmcqi.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/16_bdcj7b.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643178/rent/slider-home/photo%20home%20in%20slider/16_wryp4l.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/17_ivuysf.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/17_fspy0i.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/18_wgqgic.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/18_qxrjlu.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/19_phoznq.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/19_rbrkfj.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/20_jzliqo.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/20_svim9b.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/21_vvwag3.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/21_b4ubbk.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/22_zno7b2.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/22_mwqeuq.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/23_u7inhf.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/23_fopbr5.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/24_kl2mwc.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/24_sognxl.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/25_xepdsj.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/25_gijhym.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/26_t8hbhz.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/26_o4u1a5.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/27_k5metj.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/27_etrouh.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/28_qqsefs.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643179/rent/slider-home/photo%20home%20in%20slider/28_n7tx2q.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/29_t0myx5.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/29_yis1ll.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/30_siwowd.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/30_hwomdc.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/31_ixj8lf.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/31_rswvdg.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/32_zlxiwn.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/32_b48oum.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/33_e1u8y8.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/33_brjmcr.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/34_vh8flm.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/34_j0d5up.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/35_gflikx.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643180/rent/slider-home/photo%20home%20in%20slider/35_dcaefy.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/36_foi8ct.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/36_i26niv.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/37_t1v6gy.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/37_spducs.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/38_ze6k9v.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/38_imjll5.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103452/rent/slider-home/39_fetwat.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/39_sj8pjg.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103453/rent/slider-home/40_uzlnvb.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/40_wjl32h.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/40_wjl32h.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/40_wjl32h.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103453/rent/slider-home/41_jmy3my.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/41_wgdvcn.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103453/rent/slider-home/42_ashng4.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/42_rawkhm.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103453/rent/slider-home/43_a8krij.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/43_d3mvmj.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103453/rent/slider-home/44_fsbitg.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643182/rent/slider-home/photo%20home%20in%20slider/44_pj9b05.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
                width={610}
                height={397}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/45_rdcrhv.jpg"
            >
              <Image
                className={styles.imageSlide}
                src={
                  "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662643181/rent/slider-home/photo%20home%20in%20slider/45_tc55yl.jpg"
                }
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach."
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
