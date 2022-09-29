import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div
        id='contact'
        className={styles.footer_container}
      >
        <div className={styles.footer_logo_container}>
          <StaticImage
            className={styles.contact_logo}
            alt='Moonstruck logo'
            src='../images/logo.svg'
          />
        </div>
        <div className={styles.contact_info_wrapper}>
          <div className={styles.contact_info}>
            <p>Moonstruck d.o.o.</p>
            <p>Vojvode stepe 147</p>
            <p>11080 Belgrade, Serbia</p>
          </div>
          <div className={styles.contact_info}>
            <p>info@moonstruck.com</p>
            <p>WAT: 123456789</p>
          </div>
          <div className={styles.contact_info}>
            <p>Copyright @ 2020 - 2023</p>
            <p>Moonstruck, All Rights reserved</p>
            <p>Design by Moonstruck</p>
          </div>
          <div className={styles.contact_container__social}>
            <div>
              <a href='https://www.linkedin.com/company/moonstruck/'>
                <StaticImage
                  alt='linkedin'
                  src='../images/social/linkedin.svg'
                />
              </a>
            </div>
            <div>
              <a href='https://github.com/MOONSTRUCK-team'>
                <StaticImage
                  alt='github'
                  src='../images/social/github.svg'
                />
              </a>
            </div>
            {/* <a href='https://twitter.com'>
              <StaticImage
                alt='twitter'
                src='../images/social/twitter.svg'
              />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
