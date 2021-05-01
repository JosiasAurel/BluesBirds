import React, { FunctionComponent } from "react";

import Image from "next/image";

import Header from "../components/Header";

import styles from "../styles/index.module.css";

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <article>
            <Header />
            <main className={styles.heroContainer}>
                <Image src="/stick.png" width="300" height="300" />
                <h1 className={styles.hero}>The future of Gaming is in our palms.</h1>
            </main>

            <section className={styles.wutContainer}>
                <section className={styles.wut}>
                <div>
                    <h1>60 FPS ⚡</h1>
                    <p>We build fast and resource efficient games in no time.</p>
                </div>
                <div>
                    <h1>Platform 🌍</h1>
                    <p>The games we make are built to work on any major platform in the world. Whether Mobile, Web, PC or Consoles.</p>
                </div>
                <div>
                    <h1>25 MB ☁</h1>
                    <p>Low size, high quality. Our games are the best.</p>
                </div>
                <div>
                    <h1>A team of passionate makers 🤾‍♂️</h1>
                    <p>We love what we do and we want you to do same.</p>
                </div>
            </section>
            </section>

            <div className={styles.whereContainer}>
                <section className={styles.where}>
                <h1>Find us on Discord</h1>
               <a href="https://discord.gg/UeUHNEcX">
                    <button>
                        <p>BlusBirds Games Studios</p>
                        <Image src="/discord.png" width="40" height="40" />
                    </button>
               </a>
            </section>
            </div>

            <footer className={styles.footer}>
                <p>images from freepik and the internet</p>

                <p>&copy; {new Date().getFullYear()} BluesBirds Games Studio</p>
            </footer>
        </article>
    )
};

export default Index;