import styles from "../styles/Socials.module.css";
import {emailUrl, githubUrl, linkedinUrl, stackoverflowUrl} from "../urls";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Socials = () => (
    <div className={styles.socials}>
        <a target={'_blank'} href={linkedinUrl}>
            <FontAwesomeIcon color={'#44B78B'} size={'lg'} icon={faLinkedin} />
        </a>
        <a target={'_blank'} href={githubUrl}>
            <FontAwesomeIcon color={'#44B78B'} size={'lg'} icon={faGithub}/>
        </a>
        <a target={'_blank'} href={stackoverflowUrl}>
            <FontAwesomeIcon color={'#44B78B'} size={'lg'} icon={faStackOverflow}/>
        </a>
        <a target={'_blank'} href={emailUrl}>
            <FontAwesomeIcon color={'#44B78B'} size={'lg'} icon={faEnvelope}/>
        </a>
    </div>
)

export default Socials