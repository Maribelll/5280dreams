import Head from "next/head";
import styles from "../styles/land.module.scss";
import Slider from "../Components/slider/Slider";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Form from "../Components/Form";

export default function Lease() {
  return (
    <>
      <Head>
        <title>Home for Lease</title>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

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
            <li>Class A RV</li>
            <li>39 ft</li>
            <li>Sleeps 8</li>
            <li>External 50&quot; TV</li>
            <li>Full length power awning w/ LED</li>
            <li>SuperSprings ride system</li>
            <li>4.0kW generator</li>
            <li>1000 Watt inverter</li>
            <li>Full features list</li>
            <li>Full RV overview from manufacturer</li>
          </ul>
        </div>
      </div>

      <div className={styles.container_rules}>
        <div className={styles.rules}>
          <p className={styles.h_rules}>Rules &amp; Policies</p>
          <ul className={styles.ul_rules}>
            <li>
              Available for minimum of 7 days all the way up to 21 days at a
              time
            </li>
            <li>Pickup location is Denver, Colorado</li>
            <li>Airport pickup is available</li>
            <li>Rental rate - $379 per day</li>
            <li>150 miles per day allowance</li>
          </ul>
        </div>
      </div>
      <Form />
      <Footer />
    </>
  );
}
