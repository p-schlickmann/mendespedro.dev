import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const wrapperRef = useRef()
    const triggerRef = useRef()

    const router = useRouter()

    useEffect(() => {
        function handleClickOutside(event) {
            if (triggerRef.current && triggerRef.current.contains(event.target)) {
                return
            }
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setMobileMenuOpen(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div className={styles.container}>
            <div className={styles.desktopContainer}>
                <div className={styles.logoContainer}>
                    <a href={'/'} className={'logoText'}>
                        pedro
                    </a>
                    <span className={styles.logoComplement}>
                    The web developer for <br/>perfectionists with deadlines.
                </span>
                </div>
                <div ref={triggerRef} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={styles.menuButtonContainer}>
                    <FontAwesomeIcon icon={faBars} color={'white'} className={styles.menuIcon}/>
                </div>
                <div className={styles.buttonsContainer}>
                    <a href={'#about'}>ABOUT</a>
                    <a href={'#work'}>WORK</a>
                    <a href={'#projects'}>PROJECTS</a>
                    <a href={'#contact'}>CONTACT</a>
                </div>
            </div>
            <div ref={wrapperRef} style={{display: isMobileMenuOpen ? 'initial' : 'none'}} className={styles.mobileMenu}>
                <div onClick={() => router.push('/about')} className={styles.mobileMenuItem} style={{marginTop: '20px'}}>
                    <a className={styles.mobileMenuText}>ABOUT</a>
                </div>

                <div onClick={() => router.push('/work')} className={styles.mobileMenuItem}>
                    <a className={styles.mobileMenuText}>WORK</a>
                </div>
                <div onClick={() => router.push('/projects')} className={styles.mobileMenuItem}>
                    <a className={styles.mobileMenuText}>PROJECTS</a>
                </div>
                <div onClick={() => router.push('/contact')}  className={styles.mobileMenuItem} style={{paddingBottom: 9}}>
                    <a className={styles.mobileMenuText}>CONTACT</a>
                </div>
            </div>
        </div>
        )
}

export default Header