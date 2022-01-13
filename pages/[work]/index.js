import HtmlHead from "../../components/HtmlHead";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from '../../styles/Work.module.css'
import SubHeader from "../../components/SubHeader";
import {useState} from "react";
import {emailUrl, githubUrl, linkedinUrl, stackoverflowUrl, ufscUrl} from "../../urls";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Socials from "../../components/Socials";

const Work = () => {

    const [search, setSearch] = useState('')

    return (
        <div>
            <HtmlHead pageTitle={'Work'}/>
            <Header workPageTargetShouldNotBeBlank/>
            <SubHeader text={'Work'} search={search} setSearch={setSearch}/>
            <main className={styles.main}>
                <div className={'left'}>

                </div>
                <div className={'right'}>
                    <Socials/>
                    <div className={styles.rightMenuHeader}>
                        <h2>
                            Side projects
                        </h2>
                    </div>
                    <div className={styles.rightMenuText}>
                        <p><a style={{fontWeight: 'bold', fontSize: '16px'}} href={ufscUrl} target={'_blank'}>mendespedro.dev</a></p>
                        <p>
                            My portifolio website (this website). I used React.js to rebuild Django's original website.
                            I had a lot of fun and improved my CSS skills.
                        </p>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillItem}>
                                Javascript
                            </div>
                            <div className={styles.skillItem}>
                                React
                            </div>
                            <div className={styles.skillItem}>
                                Next.js
                            </div>
                            <div className={styles.skillItem}>
                                HTML
                            </div>
                            <div className={styles.skillItem}>
                                CSS
                            </div>
                            <div className={styles.skillItem}>
                                Git
                            </div>
                        </div>

                        {/*<span className={styles.spanComplementary}>Out 2020 - Mar 2021 · 6mos</span>*/}
                    </div>
                    <div className={styles.rightMenuText}>
                        <p><a style={{fontWeight: 'bold', fontSize: '16px'}} href={'/'} target={'_blank'}>WhatsApp Invisibility Cape</a></p>
                        <p>
                            Chrome Extension to be invisible on Whats App Web! It works by intercepting certain types of websockets.
                        </p>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillItem}>
                                Javascript
                            </div>
                            <div className={styles.skillItem}>
                                HTML
                            </div>
                            <div className={styles.skillItem}>
                                CSS
                            </div>
                            <div className={styles.skillItem}>
                                Git
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightMenuText}>
                        <p><a style={{fontWeight: 'bold', fontSize: '16px'}} href={'/'} target={'_blank'}>Streaming Platform</a></p>
                        <p>
                            Features: authentication, sign-up, filter stream by category, follow or subscribe to a streamer,
                            live chat, profile management, password change and many others!
                        </p>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillItem}>
                                Django
                            </div>
                            <div className={styles.skillItem}>
                                DjangoRestFramework
                            </div>
                            <div className={styles.skillItem}>
                                React
                            </div>
                            <div className={styles.skillItem}>
                                CSS
                            </div>
                            <div className={styles.skillItem}>
                                HTML
                            </div>
                            <div className={styles.skillItem}>
                                Git
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Work