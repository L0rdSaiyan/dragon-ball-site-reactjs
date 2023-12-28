import styles from "../styles/Cards.module.css"
function Cards()
{
    return(
        <div className={styles.CardsContainer}>
            <div className={styles.Cards}>
                lorem ipsum dolor
            </div>

            <div className={styles.Cards}>
                lorem ipsum dolor
            </div>

            <div className={styles.Cards}>
                lorem ipsum dolor
            </div>

        </div>
    )
}

export default Cards