import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Link from "next/link";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout
      title="5280 Dream Properties: Land for Sale, Home for Lease, RV Rental"
      keywords="land for sale in sedalia, house for rent north port, rent rv denver"
      description="Find a place to call home. Home by the beach, land in the country or tour the US in an RV."
    >
      <Head />

      <div className={styles.background}>
        <Menu />
        <div className={styles.main_text}>
          <h1>Find a place to call home.</h1>
          <p>Home by the beach, land in the country or tour the US in an RV.</p>
        </div>
      </div>
      <Link href={"../rv_rental"}>
        <div className={styles.container}>
          <div className={styles.rent_item}>
            <div className={styles.rent_text}>
              <div className={styles.label}>RV RENTAL</div>
              <h2>Explore</h2>
              <div className={styles.rent_img2}>
                <Image
                  src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753331/rent/_explore_xzwukj.jpg"
                  alt="Class A RV for rent in Denver."
                  width={600}
                  height={329}
                  className={styles.image_index}
                />
              </div>
              <p className={styles.paragraph}>
                Find that place you will call home by exploring the country in
                our brand new, state of the art coach big enough for your whole
                family.
              </p>

              <button className="button_transparent">See now</button>
            </div>
            <div className={styles.rent_img2}>
              <Image
                src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753331/rent/_explore_xzwukj.jpg"
                alt="Class A RV for rent in Denver."
                width={600}
                height={329}
                className={styles.image_index}
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href={"../land_for_sale"}>
        <div className={styles.container}>
          <div className={styles.rent_item_reverse}>
            <div className={styles.rent_text} style={{ marginLeft: "100px" }}>
              <div className={styles.label}>LAND FOR SALE</div>

              <h2>Build</h2>

              <div className={styles.rent_img2}>
                <Image
                  className={styles.image_index}
                  src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753406/rent/_build_f7dhz2.jpg"
                  alt="Land for sale in Sedalia, MO"
                  width={600}
                  height={329}
                />
              </div>
              <p className={styles.paragraph}>
                Build your dream home on an exclusive 2.2 acre lot in a prime
                location that&apos;s not available to the general public.
              </p>

              <button className="button_transparent">See now</button>
            </div>
            <div className={styles.rent_item}>
              <Image
                className={styles.image_index}
                src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753406/rent/_build_f7dhz2.jpg"
                alt="Land for sale in Sedalia, MO"
                width={600}
                height={329}
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href={"../home_for_lease"}>
        <div className={styles.container}>
          <div className={styles.rent_item}>
            <div className={styles.rent_text}>
              <div className={styles.label}>HOME FOR LEASE</div>
              <h2>Live</h2>
              <div className={styles.rent_img2}>
                <Image
                  className={styles.image_index}
                  src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753341/rent/_live_k4avws.jpg"
                  alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach"
                  width={600}
                  height={329}
                />
              </div>
              <p className={styles.paragraph}>
                Enjoy life in sunny Southwest
                <br />
                Florida....welcome home!
              </p>

              <button className="button_transparent">See now</button>
            </div>
            <div className={styles.rent_img}>
              <Image
                src="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1660753341/rent/_live_k4avws.jpg"
                alt="Fully furnished 2 bed 2 bath house in North Port, FL minutes away from the beach"
                width={600}
                height={329}
                className={styles.image_index}
              />
            </div>
          </div>
        </div>
      </Link>
      <Footer />
    </Layout>
  );
}
