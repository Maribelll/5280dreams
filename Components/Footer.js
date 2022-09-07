import Link from "next/link";

import style from "../styles/footer.module.scss";

export function Footer() {
  return (
    <>
      <div className={style.footer_container}>
        <div className={style.footer}>
          <div className={style.footer_block}>
            <Link href={"../rv_rental"}>
              <a className={style.p_bold}>Explore</a>
            </Link>

            <p className={style.text}>RV Rental - Denver, CO</p>
          </div>
          <div className={style.footer_block}>
            <Link href={"../land_for_sale"}>
              <a className={style.p_bold}>Build</a>
            </Link>

            <p className={style.text}>Land for Sale - Sedalia, MO</p>
          </div>
          <div className={style.footer_block}>
            <Link href={"../home_for_lease"}>
              <a className={style.p_bold}>Live</a>
            </Link>

            <p className={style.text}>House for Lease, North Port, FL</p>
          </div>
        </div>
        <hr className={style.hr} />
        <div className={style.copyright}>
          <div className={style.part1}>
            <p>Copyright © 2022 5280 Dream Properties. All Rights Reserved.</p>
          </div>
          <div className={style.part2}>
            <Link
              className={style.links}
              href="https://www.termsfeed.com/live/67028efd-3786-4968-9523-5bf49aa2c15b"
            >
              Privacy Policy
            </Link>

            <span style={{ color: "#747474", paddingLeft: "16px" }}>
              <Link
                id={style.links}
                href="https://www.termsfeed.com/live/1ed0ffe7-7e1d-480a-9bfd-ad0babf1c692"
              >
                Terms &amp; Conditons
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
