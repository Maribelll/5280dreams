import Head from "next/head";
import styles from "../styles/land.module.scss";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Formcontact from "../Components/Formcontact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div className={styles.backgr}>
        <Menu />
      </div>
      <Formcontact />
      <Footer />
    </>
  );
}
