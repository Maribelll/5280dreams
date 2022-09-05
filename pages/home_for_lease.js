import Head from "next/head";
import styles from "../styles/land.module.scss";
import Slider from "../Components/slider/Slider-home";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Form from "../Components/Form";
import Layout from "../Components/Layout";

export default function Lease() {
  return (
    <Layout title="Lease" keywords="" description="">
      <Head />

      <div className={styles.backgr}>
        <Menu />
      </div>

      <div className={styles.container_land_block}>
        <div className={styles.land_block}>
          <div className={styles.land_text}>
            <div className={styles.label}>Available in August 2023</div>
            <h1 className={styles.h3class}>
              Fully furnished 3db/2ba home in North Port, FL
            </h1>
            <p>Wexford St, North Port FL 34287</p>
          </div>
          <div className={styles.land_description}>
            <p className={styles.description}>$2,600/mo</p>
            <p className={styles.description}>1,200 sqft</p>
            <p className={styles.description}>3 bds 2 ba</p>
          </div>
        </div>
      </div>
      <Slider />
      <div className={styles.item_description}>
        <div className={styles.text_description}>
          <p className={styles.header_description}>Description</p>
          <p className={styles.p_description}>
            Enjoy this newly remodeled, 3 bedroom 2 bathroom home only minutes
            away from shopping centers, restaurants, the world-famous Warm
            Mineral Springs. Located just a short 15-minute drive to Manasota
            Key Beach, and a 30-40 minuted drive to Siesta Key Beach, Lido Key
            Beach and Myakka River State Park.
            <br />
            <br />
            The house has been completely remodeled in 2022 with brand new
            stainless steel appliances, KRAUS double kitchen sink and granite
            countertops.
            <br />
            <br /> It’s move-in ready and fully furnished with camel leather
            sofa and recliners, smart LG OLED TV, beautiful wooden console with
            plenty of storage, a king-size bed in the master bedroom, bunk beds
            in the other two bedrooms, and an electric fireplace to keep the
            whole family warm on cooler winter Florida evenings.
            <br />
            <br /> The newly installed roof with a solar panel system and LED
            lighting throughout the house ensures savings on your electricity
            bill. 30 AMP RV power outlet behind the home is also included.
            <br />
            <br /> The large backyard with fruit trees provides a peaceful
            retreat after a long day’s work with a Kenmore Elite Gas Grille
            included. This is an appealing find that will not be on the market
            for very long.
          </p>
        </div>

        <div className={styles.features}>
          <p className={styles.header_features}>Features</p>
          <ul className={styles.features_description}>
            <li>Fully furnished</li>
            <li>Completely remodeled in 2022</li>
            <li>Brand new stainless steel appliances</li>
            <li>Electric fireplace</li>
            <li>New roof installed in 2022</li>
            <li>Solar Panel system</li>
            <li>Ample LED Lighting throughout the home</li>
            <li>Large backyard with fruit trees</li>
          </ul>
        </div>
      </div>

      <div className={styles.container_rules}>
        <div className={styles.rules}>
          <p className={styles.h_rules}>Rules &amp; Policies</p>
          <ul className={styles.ul_rules}>
            <li>Minimum 1 year lease required</li>
            <li>Application fee is $75 which includes background check</li>
            <li>Deposit amount equals to one month rent</li>
            <li>
              Tenant must transfer utilities into their name within 7 days of
              move-in
            </li>
            <li>Trash is included in the rent</li>
          </ul>
        </div>
      </div>
      <Form />
      <Footer />
    </Layout>
  );
}
