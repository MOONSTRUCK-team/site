import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as styles from '../styles/navbar.module.css';
import '../styles/index.css';

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <StaticImage
          alt='moonstruck logo'
          src='../images/logo.png'
        />
      </div>
      <div className={styles.navbar_links}>
        <a href='#'>about</a>
        <a href='#what_we_do'>what we do</a>
        <a href='#technology'>technology</a>
        <a href='#project'>project</a>
        <a href='#contact'>contact</a>
      </div>
    </div>
  );
}
