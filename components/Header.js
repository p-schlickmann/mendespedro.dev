import {useEffect, useRef, useState} from "react";

import {useRouter} from "next/router";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import styles from '../styles/Header.module.css'



const Header = ({workPageTargetShouldNotBeBlank}) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const wrapperRef = useRef()
    const triggerRef = useRef()

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
                        psm
                    </a>
                    <span className={styles.logoComplement}>
                    Software Engineers for <br/>perfectionists with deadlines.
                </span>
                </div>
                {/*<div ref={triggerRef} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={styles.menuButtonContainer}>*/}
                {/*    <FontAwesomeIcon icon={faBars} color={'white'} className={styles.menuIcon}/>*/}
                {/*</div>*/}
                {/*<div className={styles.buttonsContainer}>*/}
                {/*    <Link href={'/work'}>*/}
                {/*        <a target={workPageTargetShouldNotBeBlank ? '_self' : '_blank'}>WORK</a>*/}
                {/*    </Link>*/}
                {/*    <a href={'/#about'}>ABOUT</a>*/}
                {/*    <a href={'/#contact'}>CONTACT</a>*/}
                {/*</div>*/}
            </div>
            <div ref={wrapperRef} style={{display: isMobileMenuOpen ? 'initial' : 'none'}} className={styles.mobileMenu}>
                {/*<div onClick={() => router.push('/work')} className={styles.mobileMenuItem} style={{marginTop: '20px'}}>*/}
                {/*    <a className={styles.mobileMenuText}>WORK</a>*/}
                {/*</div>*/}
                {/*<div onClick={() => router.push('/#about')} className={styles.mobileMenuItem}>*/}
                {/*    <a className={styles.mobileMenuText}>ABOUT</a>*/}
                {/*</div>*/}
                {/*<div onClick={() => router.push('/#contact')}  className={styles.mobileMenuItem} style={{paddingBottom: 9}}>*/}
                {/*    <a className={styles.mobileMenuText}>CONTACT</a>*/}
                {/*</div>*/}
            </div>
        </div>
        )
}

export default Header
