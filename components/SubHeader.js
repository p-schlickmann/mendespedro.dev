import styles from '../styles/SubHeader.module.css'

const SubHeader = ({text, search, setSearch}) => {
    return (
        <div className={styles.container}>
            <h1>
                {text}
            </h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className={styles.input} placeholder={'Search my work'}/>
        </div>
    )
}

export default SubHeader