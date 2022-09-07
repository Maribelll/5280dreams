import Head from "next/head";
import styles from "../styles/land.module.scss";
import Slider from "../Components/slider/Slider-land";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Form from "../Components/Form";
import Link from "next/link";
import Layout from "../Components/Layout";

export default function Land() {
  return (
    <Layout title="land" keywords="" description="">
      <Head />

      <div className={styles.backgr}>
        <Menu />
      </div>
      <div className={styles.container_land_block}>
        <div className={styles.land_block} id={styles.adapttop}>
          <div className={styles.land_text}>
            <div className={styles.label}>AVAILABLE NOW</div>
            <h1 className={styles.h3class}>
              H2.2 acre lot in a new subdivision of Sedalia, MO
            </h1>
            <p>Sedalia, MO 65301</p>
          </div>
          <div className={styles.land_description}>
            <p className={styles.description}>2.2 acres</p>
            <p className={styles.description}>No HOA</p>
            <p className={styles.description}>$165,900</p>
          </div>
        </div>
      </div>
      <Slider />
      <div className={styles.item_description}>
        <div className={styles.text_description}>
          <p className={styles.header_description}>Description</p>
          <p className={styles.p_description}>
            Build your dream home on this huge 2.2 acre lot on a cul-de-sac in a
            new subdivision of Sedalia, Missouri.
            <br /> <br />
            This is an exclusive opportunity to buy and build on a lot that
            &rsquo;s not available on the market to the general public. Located
            just outside Sedalia city limits, in brand new neighborhood that
            &rsquo;s in process of being built by individual owners.
            <br />
            <br />
            No HOA, only a few simple rules on the type of home you can build
            but otherwise, they sky is the limit. Enjoy beautiful views of the
            sunset on your front porch with a cup of tea or host a great back
            yard barbeque with friends and family.
            <br /> <br />
            There is a wooded area at the back of the property and a dry creek
            which adds a really nice setting to your home.
          </p>
        </div>

        <div className={styles.features}>
          <p className={styles.header_features}>Features</p>
          <ul className={styles.features_description}>
            <li> 2.2 acres</li>
            <li>No HOA</li>
            <li>Beautiful views</li>
            <li>Wooded area</li>
            <Link href={"/plat_map"}>
              <li
                style={{
                  borderBottom: "solid 1px",
                  lineHeight: "1.2em",
                  maxWidth: "65px",
                  paddingTop: "2px",
                  cursor: "pointer",
                }}
              >
                Plat map
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <Form />
      <Footer />
    </Layout>
  );
}
