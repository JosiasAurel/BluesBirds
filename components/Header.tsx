import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

// import styles
import styles from "../styles/header.module.css";

const Header: FunctionComponent = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Image src="/logo.png" width="40" height="40" />
            <nav className={styles.navigation}>
                <Link href="/blog">
                    <p>Blog</p>
                </Link>
                <Link href="/about">
                    <p>About</p>
                </Link>
            </nav>
        </header>
    )
};

export default Header;