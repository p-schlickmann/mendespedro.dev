import styles from '../styles/SubHeader.module.css'

const SubHeader = ({text}) => {
    return (
        <div className={styles.container}>
            <h1>
                {text}
            </h1>
        </div>
    )
}

export default SubHeader