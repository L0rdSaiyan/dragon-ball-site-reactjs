import styles from "../styles/Cards.module.css"
export default function Cards({image1,image2,image3,description1,description2,description3})
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

Cards.defaultProps = {
    image1: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg',
    image2: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg',
    image3: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg',
    description1: 'Not avaliable now',
    description2: 'Not avaliable now',
    description3: 'Not avaliable now'
}
