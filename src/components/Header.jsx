import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo2}>
        <StaticImage
          className={styles.yellow_layer}
          alt='circle'
          src='../images/logo2.png'
        />
      </div>
      <div className={styles.header_yellow_layer}>
        <div>
          <StaticImage
            // class={styles.yellow_pic}
            alt='yellow layer'
            src='../images/yellow_layer.png'
          />
        </div>
        <div className={styles.header_simply}>
          <h2>SIMPLY FUNCTIONAL</h2>
          <p>
            Taking on the challanges and complexity of your idea, we simplify
            your equation and make it work, simply, functional
          </p>
        </div>
      </div>
    </div>
  );
}
