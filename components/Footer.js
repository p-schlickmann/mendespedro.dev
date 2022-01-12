import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.credits}>
                    <Link href={'/'}>
                        <a  className={'logoText'}>
                            pedro
                        </a>
                    </Link>
                    <div>
                        <span className={styles.miniHeader}>Hosting by</span>
                        <a target={'_blank'} href={'https://vercel.com'} className={styles.vercel}/>
                    </div>
                    <div className={styles.designContainer}>
                        <span className={styles.miniHeader}>Design by</span>
                        <a target={'_blank'} className={styles.threespot} href="https://www.threespot.com"/>
                        <span className={styles.ampersand}>&amp;</span>
                        <a target={'_blank'} className={styles.andrevv} href="http://andrevv.com/"/>
                    </div>
                </div>
                <div className={styles.copyrightContainer}>
                    <span className={styles.copyright}>
                        © 2022 <Link href={'/'}><a>Mendes Pedro</a></Link>.
                        This website was intentionally copied from the
                        original <a target={'_blank'}  href={'https://www.djangoproject.com/'}>Django website.</a>
                    </span>
                </div>

            </div>
        </footer>
    )
}

export default Footer