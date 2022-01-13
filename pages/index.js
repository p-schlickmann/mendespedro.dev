import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
    djangoRepoUrl,
    emailUrl, getWorkUrl,
    githubUrl,
    harvardUrl,
    linkedinUrl, reactAutocomplete,
    stackoverflowUrl,
    ufscUrl,
    wizardUrl, workUrl
} from "../urls";
import HtmlHead from "../components/HtmlHead";
import {useRouter} from "next/router";
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
                          {/*My name is Pedro Mendes and I build things for the web, with Django.*/}
                          My name is Pedro Mendes and this website is under development.
                      </em>
                  </p>
                  <p>
                      <a href={'#about'} className={styles.bannerButton}>Ok I'll check in later</a>
                      {/*See my other top skills*/}
                  </p>
              </div>
              <div className={styles.secondaryContainer} id={'about'}>
                  <div className={styles.left}>
                      <h1 className={styles.secondaryHeader}>About me</h1>
                      <p>
                          I would describe myself as a truly passionate tech guy.
                          One of my best memories as a kid it's me playing games with my father on the computer.
                          Since then, I've always wanted to know how things worked in the background.
                          Now everytime I come across a new technology or something that triggers that
                          curiosity, I instantly Google it. I believe that's why I became a self-taught
                          software engineer in such little time, pure passion.
                      </p>
                      <div className={styles.projects}>
                          <div onClick={() => router.push(getWorkUrl('travelstation'))}>
                              <div className={styles.imageContainer}>
                                  <img alt={'travelstation img'} src={'/travelstation.png'} />
                              </div>
                              <div className={styles.projectNameContainer}>
                                  <span>Travel Station</span>
                                  <span>Software Engineer</span>
                              </div>
                          </div>
                          <div onClick={() => router.push(getWorkUrl('eadguru'))}>
                              <div className={styles.imageContainer}>
                                  <img alt={'eadguru img'} src={'/eadguru.png'} />
                              </div>
                              <div className={styles.projectNameContainer}>
                                  <span>EadGuru</span>
                                  <span>Fullstack Developer</span>
                              </div>
                          </div>
                      </div>
                      <a href={workUrl} className={styles.allProjectsButton}>
                          Browse all my work
                      </a>
                      <div className={styles.separator} id={'contact'}/>
                      <h1 className={styles.secondaryHeader} >Contact</h1>
                      <p><a className={'link'} href={emailUrl} target={'_blank'}>contact@mendespedro.dev</a></p>
                  </div>
                  <div className={styles.right}>
                      <Socials/>
                      <div className={styles.rightMenuHeader}>
                          <h2>Skills</h2>
                      </div>
                      <div className={styles.skillsContainer}>
                          <div className={styles.skillItem}>
                            Django
                          </div>
                          <div className={styles.skillItem}>
                              DjangoRestFramework
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
                          <h2>Education</h2>
                      </div>
                      <div className={styles.rightMenuText}>
                          <p><a href={ufscUrl} target={'_blank'}>Information Systems Degree | UFSC</a></p>
                          <p>2020 - 2025</p>
                      </div>
                      <div className={styles.rightMenuText}>
                          <p><a href={harvardUrl} target={'_blank'}>Web Programming with Python and Javascript | Harvard</a></p>
                          <p>2020</p>
                      </div>
                      <div className={styles.rightMenuText}>
                          <p><a href={wizardUrl} target={'_blank'}>English Course | Wizard</a></p>
                          <p>2012 - 2019</p>
                      </div>
                      <div className={styles.rightMenuHeader} style={{marginTop: '40px'}}>
                          <h2>Open Source Contributions</h2>
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
