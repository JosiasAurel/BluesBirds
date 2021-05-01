import React, { FunctionComponent } from "react";

import Header from "../components/Header";
import Image from "next/image";

import styles from "../styles/about.module.css";

const About: FunctionComponent = (): JSX.Element => {
    return (
        <article className={styles.page}>
            <Header />
            <main className={styles.about}>
                <Image src="/logo.png" width="250" height="250" />
                <h1>Who are we ?</h1>
            </main>

            <article>
                <div>
                    <p>At BluesBirds, we are a team of learners and makers trying to build better gaming accessibility and games.</p>
                <br/>
                <p>We work with some awesome technologies to acheive that in not time.</p>
                </div>

                <div>
                    <h2>Team</h2>
                    <div className={styles.team}>
                        <div className={styles.user}>
                        JA
                    </div>
                    <div className={styles.user}>
                        GL
                    </div>
                    <div className={styles.user}>
                        WV
                    </div>
                    <div className={styles.user}>
                        ND
                    </div>
                    </div>
                </div>

                <div>
                    <h2>Technologies we work with</h2>

                    <div className={styles.team}>
                        <Image src="/godot.svg" width="100" height="100" />
                        <Image src="/nextjs.png" width="100" height="100" />
                    </div>
                </div>
            </article>

            <footer className={styles.footer}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p>&copy; {new Date().getFullYear()} BluesBirds Game Studio</p>
            </footer>
        </article>
    )
};

export default About;