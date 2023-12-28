import React, { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';

function Carousel() {
    const arrImg = [
        'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/pt_BR/dlc/switch-dlc/dragon-ball-fighterz-dlc/individual/dragon-ball-fighterz-gogeta-ssgss/image',
        'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/fr_CA/dlc/switch-dlc/dragon-ball-fighterz-dlc/individual/dragon-ball-fighterz-vegito-ssgss/image',
        'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/pt_BR/dlc/switch-dlc/dragon-ball-fighterz-dlc/individual/dragon-ball-fighterz-gogeta-ss4/image',
        //Devido a dinamicidade que eu criei para esse componente, é possível adicionar quantas imagens você quiser.
    ];

    const [idx, setIdx] = useState(0);
    
    const nextImage = () => {
        setIdx((prevIdx) => (prevIdx === arrImg.length - 1 ? 0 : prevIdx + 1));
    };

    const prevImage = () => {
        setIdx((prevIdx) => (prevIdx === 0 ? arrImg.length - 1 : prevIdx - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 1500);

        return () => clearInterval(interval);
    }, [nextImage]);

    return (
        <div className={styles.CarouselContainer}>
            <div className={styles.CarouselImages}>
                <div className={styles.ImageContainer}>
                    <img
                        className={styles.CarouselImage}
                        src={arrImg[idx]}
                        alt="Carousel Item"
                    />
                    <div className={styles.LeftButton}>
                        <button onClick={prevImage}></button>
                    </div>
                    <div className={styles.RightButton}>
                        <button onClick={nextImage}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
