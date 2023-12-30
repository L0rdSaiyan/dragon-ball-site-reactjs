import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header_Container}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Dragon_Ball_Z_Logo_A.png" alt="Logo" />
      <div className={styles.navigation_Header}>
        <a href="#" id={styles.home}>
          Home
        </a>
        <a href="#" id={styles.cursos}>
          Mangás
        </a>
        <a href="#"  id={styles.ofertas}>
          Mudar cor
        </a>
        <a href="#" id={styles.socialMedia}>
          Redes Sociais
        </a>
      </div>
    </div>
  );
}

