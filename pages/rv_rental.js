// import Pdf from "../docs/2021 Fleetwood Flair 28A Features Guide.pdf";
// import Pdf2 from "../docs/2021-Fleetwood-Flair.pdf";

import Head from "next/head";
import styles from "../styles/land.module.scss";
import Slider from "../Components/slider/Slider-rent";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Form from "../Components/Form";
import Link from "next/link";
import Layout from "../Components/Layout";

export default function Rental() {
  return (
    <Layout title="rv" keywords="" description="">
      <Head />

      <div className={styles.backgr}>
        <Menu />
      </div>
      <div className={styles.container_land_block}>
        <div className={styles.land_block}>
          <div className={styles.land_text}>
            <div className={styles.label}>AVAILABLE NOW</div>
            <h1 className={styles.h3class}>
              High-end Class A RV that sleeps up to 8 people
            </h1>
            <p>Pickup location is Denver, Colorado</p>
          </div>
          <div className={styles.land_description}>
            <p className={styles.description}>$379/day</p>
            <p className={styles.description}>Up to 150 miles/day</p>
            <p className={styles.description}>Sleeps 8</p>
          </div>
        </div>
      </div>
      <Slider />
      <div className={styles.item_description}>
        <div className={styles.text_description}>
          <p className={styles.header_description}>Description</p>
          <p className={styles.p_description}>
            Find your ideal place to call home by traveling in a high-end,
            modern, state of the art Class A RV that can sleep up to 8 people.
            Equipped with all the amenities you will need on your adventure....
            <br />
            <br />
            This 2021 Fleetwood Flair 28A has got what it takes to get you into
            all the parks at only 29 feet, yet it has the sleeping capacity to
            sleep 8.
            <br />
            <br /> With a king-size bed, dinette sleeper, sofa sleeper, and a
            drop-down Queen size bed; you can easily sleep either 6 or 8.
            <br />
            <br /> On those warm summer evenings or cool fall evenings, when
            there is nothing better than being under the stars and watching a
            movie, you have an external 50&quot; TV. If the stars are a bit too
            bright for your liking, go ahead and use your full length power
            awning with LED light to set a new ambiance for your evening.
            <br />
            <br /> The Ford truss Style platform chassis gives you balance,
            control, a smooth ride, and ample storage space. Ford Tough!
            <br />
            <br /> Also we have upgraded this coach with
            &quot;SuperSprings&quot; ride system to give you an even better
            cruising experience without the feel of driving a high profile
            vehicle down the road.
            <br />
            <br /> The 4.0kW generator gives you power when not at a campsite,
            and a 1000 Watt inverter gives you the reserve you need when it is
            not on.
            <br />
            <br /> Beautifully laid out and designed, this feels like a much
            larger unit. Check out the pics and take it on a road trip yourself.
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

            <li
              style={{
                borderBottom: "solid 1px",
                lineHeight: "1.2em",
                maxWidth: "114px",
                paddingTop: "2px",
                cursor: "pointer",
              }}
            >
              Full features list
            </li>

            <li
              style={{
                borderBottom: "solid 1px",
                lineHeight: "1.2em",
                maxWidth: "255px",
                paddingTop: "5px",
                cursor: "pointer",
              }}
            >
              Full RV overview from manufacturer
            </li>
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
    </Layout>
  );
}
