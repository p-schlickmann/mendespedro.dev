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

const work = () => {

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
                            Work history
                        </h2>
                    </div>
                    <div className={styles.rightMenuText}>
                        <p>Software Engineer | <a href={ufscUrl} target={'_blank'}>Travel Station</a></p>
                        <span>
                            Responsible for everything related to the technological aspect, being able to really
                            test my skills and learn from my mistakes. Where I could decide the best solution for
                            the given problem, and be held responsible for the consequences, good or bad ones.
                        </span>
                        <span className={styles.spanComplementary}>Mar 2021 - Present · 11mos</span>
                    </div>
                    <div className={styles.rightMenuText}>
                        <p>Fullstack Developer | <a href={ufscUrl} target={'_blank'}>EadGuru</a></p>
                        <span>
                            Responsible for delivering new tested features to the platform, implementing
                            unit/integration tests to the most critical part of the codebase and also
                            composing docker files to automate the configuration process of the development environment.
                        </span>
                        <span className={styles.spanComplementary}>Apr 2021 - May 2021 · 2mos</span>
                    </div>
                    <div className={styles.rightMenuText}>
                        <p>Web Development Internship | <a href={ufscUrl} target={'_blank'}>EadGuru</a></p>
                        <span>
                            During this time I learned software development best practices, concepts of clean
                            code, SCRUM and the importance of an intuitive user interface.
                        </span>
                        <span className={styles.spanComplementary}>Out 2020 - Mar 2021 · 6mos</span>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default work