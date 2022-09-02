import { Autoplay, Navigation } from "swiper";
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
import image26 from "../../public/slider/home/26.JPG";
import image27 from "../../public/slider/home/27.JPG";
import image28 from "../../public/slider/home/28.JPG";
import image29 from "../../public/slider/home/29.JPG";
import image30 from "../../public/slider/home/30.JPG";

import image31 from "../../public/slider/home/31.JPG";
import image32 from "../../public/slider/home/32.JPG";
import image33 from "../../public/slider/home/33.JPG";
import image34 from "../../public/slider/home/34.JPG";
import image35 from "../../public/slider/home/35.JPG";
import image36 from "../../public/slider/home/36.JPG";
import image37 from "../../public/slider/home/37.JPG";
import image38 from "../../public/slider/home/38.JPG";
import image39 from "../../public/slider/home/39.JPG";
import image40 from "../../public/slider/home/40.JPG";

import image41 from "../../public/slider/home/41.JPG";
import image42 from "../../public/slider/home/42.JPG";
import image43 from "../../public/slider/home/43.JPG";
import image44 from "../../public/slider/home/44.JPG";
import image45 from "../../public/slider/home/45.JPG";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Sliderhome() {
  return (
    <>
      <div className={styles.container_slider}>
        <Fancybox>
          <Swiper
            style={{
              maxWidth: "1346px",
            }}
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              clickable: true,
            }}
            loop={true}
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/1_oprynt.jpg"
              >
                <Image
                  className={styles.imageSlide}
                  src={image1}
                  alt="slide2"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/3_utrm4r.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/4_zbte81.jpg"
              >
                <Image
                  className={styles.imageSlide}
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/5_izf3bv.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/6_gm71bu.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103449/rent/slider-home/7_zc4bgd.jpg"
              >
                <Image
                  className={styles.imageSlide}
                  src={image7}
                  alt="land"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/9_moeo8p.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/10_hnsgz9.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/11_tuwpv2.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/12_n4udq5.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/13_kttcmc.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/14_vopnve.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/15_bx6vfw.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103450/rent/slider-home/16_bdcj7b.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/17_ivuysf.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/18_wgqgic.jpg"
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
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/19_phoznq.jpg"
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
            <SwiperSlide>
              <a
                data-fancybox="gallery"
                href="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662103451/rent/slider-home/20_jzliqo.jpg"
              >
                <Image
                  className={styles.imageSlide}
                  src={image20}
                  alt="land"
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
                  src={image21}
                  alt="land"
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
                  src={image22}
                  alt="land"
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
                  src={image23}
                  alt="land"
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
                  src={image24}
                  alt="land"
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
                  src={image25}
                  alt="land"
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
                  src={image26}
                  alt="land"
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
                  src={image27}
                  alt="land"
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
                  src={image28}
                  alt="land"
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
                  src={image29}
                  alt="land"
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
                  src={image30}
                  alt="land"
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
                  src={image31}
                  alt="land"
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
                  src={image32}
                  alt="land"
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
                  src={image33}
                  alt="land"
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
                  src={image34}
                  alt="land"
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
                  src={image35}
                  alt="land"
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
                  src={image36}
                  alt="land"
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
                  src={image37}
                  alt="land"
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
                  src={image38}
                  alt="land"
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
                  src={image39}
                  alt="land"
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
                  src={image40}
                  alt="land"
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
                  src={image30}
                  alt="land"
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
                  src={image41}
                  alt="land"
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
                  src={image42}
                  alt="land"
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
                  src={image43}
                  alt="land"
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
                  src={image45}
                  alt="land"
                  width={610}
                  height={397}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </Fancybox>
      </div>
    </>
  );
}
