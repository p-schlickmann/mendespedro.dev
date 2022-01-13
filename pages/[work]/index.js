import HtmlHead from "../../components/HtmlHead";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from '../../styles/Work.module.css'
import SubHeader from "../../components/SubHeader";
import {
    eadGuruUrl,
    emailUrl,
    githubUrl,
    invisCapeUrl,
    linkedinUrl,
    mendespedroUrl,
    stackoverflowUrl,
    streamUrl, travelstationUrl,
    ufscUrl
} from "../../urls";
import Socials from "../../components/Socials";

const Work = () => {


    return (
        <div>
            <HtmlHead pageTitle={'Work'}/>
            <Header workPageTargetShouldNotBeBlank/>
            <SubHeader text={'Work'}/>
            <main className={styles.main}>
                <div className={'left'}>
                    <div className={styles.experienceContainer} style={{marginTop: '50px'}}>
                        <h2>
                            <a href={travelstationUrl} target={'_blank'} referrerPolicy={'no-referrer'}>Travel Station · 11 months</a>
                        </h2>
                        <h3>Software Engineer</h3>
                        <p>
                            Responsible for everything related to the technological aspect, being able to really test
                            my skills and learn from my mistakes. Where I could decide the best solution for the given
                            problem, and be held responsible for the consequences, good or bad ones.
                        </p>
                        <p>Mar 2021 - Present</p>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillItem}>
                                Django
                            </div>
                            <div className={styles.skillItem}>
                                DjangoRestFramework
                            </div>
                            <div className={styles.skillItem}>
                                Javascript
                            </div>
                            <div className={styles.skillItem}>
                                React.js
                            </div>
                            <div className={styles.skillItem}>
                                Next.js
                            </div>
                            <div className={styles.skillItem}>
                                AWS
                            </div>
                            <div className={styles.skillItem}>
                                CI/CD
                            </div>
                        </div>
                    </div>
                    <div style={{borderTop: '1px solid var(--border)', margin: '30px 0'}}/>
                    <div className={styles.experienceContainer}>
                        <h2>
                            <a target={'_blank'} referrerPolicy={'no-referrer'} href={eadGuruUrl}>EadGuru · 8 months</a>
                        </h2>
                        <h3>Fullstack Developer</h3>
                        <p>
                            Responsible for delivering new tested features to the platform,
                            implementing unit/integration tests to the most critical part of the codebase and also
                            composing docker files to automate the configuration process of the development environment.
                        </p>
                        <p>Apr 2021 - May 2021 · 2 months</p>
                        <div style={{margin: '40px 0'}}/>
                        <h3>Web Development Internship</h3>
                        <p>I built an email marketing platform using Django. During this time I learned software development best practices, concepts of clean code,
                            SCRUM and the importance of an intuitive user interface.</p>
                        <p>Oct 2020 - Mar 2021 · 6 months</p>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skillItem}>
                                Python
                            </div>
                            <div className={styles.skillItem}>
                                Django
                            </div>
                            <div className={styles.skillItem}>
                                DjangoRestFramework
                            </div>
                            <div className={styles.skillItem}>
                                Javascript
                            </div>
                            <div className={styles.skillItem}>
                                Vue.js
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
                            <div className={styles.skillItem}>
                                Docker
                            </div>
                            <div className={styles.skillItem}>
                                Docker Compose
                            </div>
                            <div className={styles.skillItem}>
                                Automated testing in Django
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'right'}>
                    <Socials/>
                    <div className={styles.rightMenuHeader}>
                        <h2>
                            Side projects
                        </h2>
                    </div>
                    <div className={styles.rightMenuText}>
                        <p><a style={{fontWeight: 'bold', fontSize: '16px'}} href={mendespedroUrl} target={'_blank'}>mendespedro.dev</a></p>
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
                        <p><a style={{fontWeight: 'bold', fontSize: '16px'}} href={invisCapeUrl} target={'_blank'}>WhatsApp Invisibility Cape</a></p>
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
                        <p><a style={{fontWeight: 'bold', fontSize: '16px'}} href={streamUrl} target={'_blank'}>Streaming Platform</a></p>
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