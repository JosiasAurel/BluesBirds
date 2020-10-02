import Link from "next/link";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header className="{styles.header}">
      <div className="{styles.header-div}">
        <Link href="/shop">
          <a className="{styles.link}">Marketplace</a>
        </Link>
        <Link href="/blog">
          <a className="{styles.link}">Blog</a>
        </Link>
        <Link href="/support">
          <a className="{styles.link}">Support</a>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
