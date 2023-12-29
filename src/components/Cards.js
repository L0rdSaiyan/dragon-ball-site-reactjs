import styles from "../styles/Cards.module.css"
function Cards({image1,image2,image3,description1,description2,description3})
{
    return(
        <div className={styles.CardsContainer}>
            <div className={styles.Cards}>
                <img src={image1}></img>
                <p>{description1}</p>
            </div>

            <div className={styles.Cards}>
                <img src={image2}></img>
                <p>{description2}</p>
            </div>

            <div className={styles.Cards}>
                <img src={image3}></img>
                <p>{description3}</p>

            </div>

        </div>
    )
}

export default Cards