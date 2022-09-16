import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/development.module.css';

const Development = () => {
  return (
    <div
      id='technology'
      className={styles.development_background}
    >
      <div>
        <div className={styles.development_text__logo}>
          <div className={styles.development_text_wrapper}>
            <h2>BLOCKCHAIN DEVELOPMENT</h2>
            <p>
              Our team is structured with a wide spectrum of engineering roles
              and experience levels, so that we can very diversified and broad
              project scopes. Thus, we can offer development services for
              several project segments and our engagement can dynamically shift
              as the project starts advancing.
            </p>
          </div>
          <div className={styles.logo_wrapper}>
            <StaticImage
              alt='circle'
              src='../images/logo2.png'
            />
          </div>
        </div>
        <div>
          <div className={styles.moons_text__wrapper}>
            <p>
              <span>
                DAO <br /> launching
              </span>
            </p>
            <p>
              DeFi <br />
              development
            </p>
            <p>
              Smart contract <br />
              development <br />
              and audits
            </p>
            <p>
              <span>
                DApp <br />
                development
              </span>
            </p>
          </div>
          <div className={styles.development_four_moons}>
            <StaticImage
              alt='moons'
              src='../images/four_moons.png'
            />
          </div>
        </div>
        <div className={styles.technical_skills}>
          <p>
            Product Consulting / Product Shaping / System Architecture /
            Technical Consulting Technology Stack / Token Mechanics and
            Algorithms / Tokenomics / Security Audit Software Development /
            Technical Onboarding / Technical Documentation / Testing and QA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Development;
