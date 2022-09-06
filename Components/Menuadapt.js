import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import style from "../styles/menuadapt.module.scss";

export function Menuadapt() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo_up}>
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={192} height={50} />
          </Link>
        </div>
        <input className={style.menuBtn} type="checkbox" id={style.menuBtn} />
        <label className={style.menuIcon} forhtml={style.menuBtn}>
          <span className={style.navicon}></span>
        </label>

        <ul className={style.menu_ul}>
          <li>
            <Link href={"/land_for_sale"}>
              <a>Land for Sale</a>
            </Link>
          </li>

          <li>
            <Link href={"/home_for_lease"}>
              <a>Home for Lease</a>
            </Link>
          </li>

          <li>
            <Link href={"/rv_rental"}>
              <a>RV Rental</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
