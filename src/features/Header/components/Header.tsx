import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/assets/images/healthera-logo.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image src={headerLogo} alt="Header logo" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/prescriptions" className={styles.navLink}>
              Prescription List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
