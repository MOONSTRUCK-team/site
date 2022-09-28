import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as styles from '../styles/navbar.module.css';
import '../styles/index.css';
import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_container}>
        <StaticImage
          className={styles.navbar_logo}
          alt='moonstruck logo'
          src='../images/logo.svg'
        />
      </div>
      <div className={styles.navbar_links}>
        <Link to='/'>about</Link>
        <Link to='/#what_we_do'>what we do</Link>
        <Link to='/#technology'>technology</Link>
        <Link to='/#project'>project</Link>
        <Link to='/#contact'>contact</Link>
      </div>
    </div>
  );
}
