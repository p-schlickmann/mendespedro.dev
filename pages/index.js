import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import HtmlHead from "../components/HtmlHead";
import {useRouter} from "next/router";
import {djangoRepoUrl, emailUrl, harvardUrl, reactAutocomplete, ufscUrl, wizardUrl, workUrl} from "../urls";
import Socials from "../components/Socials";

export default function Home() {

    const router = useRouter()

    return (
      <div className={styles.container}>
          <HtmlHead/>
          <Header/>
          <main>
              <div className={styles.copyBanner}>
                  <p className={styles.bannerText}>
                      <em>
                          Transform your idea into an MVP in weeks, not months.
                      </em>
                  </p>
                  <p>
                      <a href={emailUrl} className={styles.bannerButton}>
                          Contact us
                      </a>
                  </p>
              </div>
              <div className={styles.secondaryContainer} id={'about'}>
                  <div className={styles.left}>
                      <h1 className={styles.secondaryHeader}>About us</h1>
                      <p>
                          We specialize in turning ideas into Minimum Viable Products (MVPs) through expert software engineering. We pride ourselves on delivering rapid development without sacrificing quality, helping bring your vision to life efficiently and effectively.
                      </p>
                      <div className={styles.projects}>
                          <div onClick={() => router.push('/')}>
                              <div className={styles.imageContainer}>
                                  <img alt={'fetchly img'} src={'/fetchly.png'} />
                              </div>
                              <div className={styles.projectNameContainer}>
                                  <span>Fetchly Labs</span>
                                  <span style={{opacity: 0.7}}>Multiple projects</span>
                              </div>
                          </div>
                          <div onClick={() => router.push('/')}>
                              <div className={styles.imageContainer}>
                                  <img alt={'travelstation img'} src={'/travelstation.png'} />
                              </div>
                              <div className={styles.projectNameContainer}>
                                  <span>Travel Station</span>
                                  <span style={{opacity: 0.7}}>Social Network for travelers</span>
                              </div>
                          </div>
                          <div onClick={() => router.push('/')}>
                              <div className={styles.imageContainer}>
                                  <img alt={'eadguru img'} src={'/eadguru.png'} />
                              </div>
                              <div className={styles.projectNameContainer}>
                                  <span>EadGuru</span>
                                  <span style={{opacity: 0.7}}>Create your own learning platform</span>
                              </div>
                          </div>
                      </div>
                      <div className={styles.separator} id={'contact'}/>
                      <h1 className={styles.secondaryHeader} >Contact</h1>
                      <p><a className={'link'} href={emailUrl} target={'_blank'}>contact@mendespedro.dev</a></p>
                  </div>
                  <div className={styles.right}>
                      <div className={styles.rightMenuHeader}>
                          <h2>Technologies</h2>
                      </div>
                      <div className={styles.skillsContainer}>
                          <div className={styles.skillItem}>
                            Django
                          </div>
                          <div className={styles.skillItem}>
                              DjangoRestFramework
                          </div>
                          <div className={styles.skillItem}>
                              Ruby on Rails
                          </div>
                          <div className={styles.skillItem}>
                              React Native
                          </div>
                          <div className={styles.skillItem}>
                              SQL / NoSQL
                          </div>
                          <div className={styles.skillItem}>
                              React
                          </div>
                          <div className={styles.skillItem}>
                              Next.js
                          </div>
                          <div className={styles.skillItem}>
                              AWS
                          </div>
                          <div className={styles.skillItem}>
                              Tests
                          </div>
                          <div className={styles.skillItem}>
                              Docker
                          </div>
                          <div className={styles.skillItem}>
                              CI/CD
                          </div>
                      </div>
                      <div className={styles.rightMenuHeader} style={{marginTop: '40px'}}>
                          <h2>Open Source Contributions</h2>
                      </div>
                      <div className={styles.rightMenuText}>
                          <p><a href={'https://github.com/skryukov/turbo-mount'} target={'_blank'}>Turbo Mount</a></p>
                          <p>2024</p>
                      </div>
                      <div className={styles.rightMenuText}>
                          <p><a href={djangoRepoUrl} target={'_blank'}>Django</a></p>
                          <p>2021</p>
                      </div>
                      <div className={styles.rightMenuText}>
                          <p><a href={reactAutocomplete} target={'_blank'}>React Google Autocomplete</a></p>
                          <p>2020</p>
                      </div>
                  </div>
              </div>
          </main>
          <Footer/>
      </div>
  )
}
