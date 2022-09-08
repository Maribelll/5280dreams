import Head from "next/head";
import styles from "../styles/contact.module.scss";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import Formcontact from "../Components/Formcontact";
import Layout from "../Components/Layout";

export default function Contact() {
  return (
    <Layout
      title="cContact - 5280 Dream Properties"
      keywords="contact 5280 dream properties"
      description="Contact us to get more info or schedule a showing."
    >
      <Head />

      <div className={styles.backgr}>
        <Menu />
      </div>
      <Formcontact />

      <div className={styles.container_dowland}>
        <div className={styles.dowland}>
          <h4>Downloads</h4>
          <p>Coming soon.</p>
        </div>
      </div>
      <div className={styles.container_payment}>
        <div className={styles.payment}>
          <h4>Payment Info</h4>
          <p>Coming soon.</p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
