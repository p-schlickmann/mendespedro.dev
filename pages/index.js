import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
        <title>Mendes Pedro</title>
        <meta name="description" content="The web developer for perfectionists with deadlines." />
        <link rel="icon" href="/favicon.png" />
      </Head>
          <Header/>
          <main className={styles.main}>
              <div className={styles.copyBanner}>
                  <p className={styles.bannerText}>
                      <em>
                          Django My name is Pedro Mendes, and this website is currently under development.
                      </em>
                  </p>
                  <p>
                      <a className={styles.bannerButton}>Contact Me</a>
                  </p>
              </div>
          </main>
          <Footer/>
      </div>
  )
}
