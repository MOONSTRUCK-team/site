import { StaticImage } from 'gatsby-plugin-image';

import React from 'react';

import * as styles from '../styles/whatWeDo.module.css';

export default function WhatWeDo() {
  return (
    <div
      id='what_we_do'
      className={styles.what_we_do_container}
    >
      <div className={styles.what_we_do_text}>
        <h2>WHAT WE DO</h2>
        <div className={styles.what_we_do_text_box}>
          <p>
            Out team is structured with a wide spectrum of engineering roles and
            experience levels, so that we can cover very diversified and broad
            project scopes. Thus, we can offer development services for several
            project segments and our engagement can dynamically shift as the
            project starts advancing.
          </p>
        </div>
      </div>
      <div className={styles.what_we_do_card_container}>
        <div className={styles.what_we_do_card}>
          <div>
            <StaticImage
              className={styles.what_we_do_picture}
              alt='audit picture'
              src='../images/Audit_crna.png'
            />
          </div>
          <h2>AUDIT</h2>
          <p>
            By assessing the project's volume, complexity and viability, as well
            as it's system architecture and technology stack, we are able to
            offer insight into its overall functioning and quality. We conduct
            code audits to make sure that the software is developed in
            accordance with the highest technical standards. These also include
            security audits to look for potential software flaws and performance
            evaluations to establish system benchmarks.
          </p>
        </div>
        <div className={styles.what_we_do_card}>
          <div>
            <StaticImage
              alt='design picture'
              src='../images/Design_crna.png'
              className={styles.what_we_do_picture}
            />
          </div>
          <h2>DESIGN</h2>
          <p>
            We can assist you in applying structured reasoning and validating
            your concepts by providing ideation and product design workshops to
            help you build your idea from scratch, or improve an existing
            product or service. Together, we will create a technical brief and
            product design document that will enable accurate solution delivery
            with percise time and cost estimation. Our extensive services are
            offered remotely as well as on-site.
          </p>
        </div>
        <div className={styles.what_we_do_card}>
          <div>
            <StaticImage
              alt='develop picture'
              src='../images/Develop2_crna.png'
              className={styles.what_we_do_picture}
            />
          </div>
          <h2>DEVELOP</h2>
          <p>
            We provide full-stack custom software development, including UI/UX
            design, as well as support and maintenance. Upon request, we provide
            new products, assist you in re-engineering and upgrading your
            current solutions, or make it easier to integrate with outher
            systems.
          </p>
        </div>
        <div className={styles.what_we_do_card}>
          <div>
            <StaticImage
              alt='support picture'
              src='../images/Support2_crna.png'
              className={styles.what_we_do_picture}
            />
          </div>
          <h2>SUPPORT</h2>
          <p>
            Once product development is finalized, we can offer support,
            ensuring that the software continues to operate at a high level.
            Based on your needs, we provide periodic spot checks or dedicated
            maintenance with support teams. With extended development teams, we
            can assist you in scaling your development capacity and upgrading
            your service.
          </p>
        </div>
      </div>
    </div>
  );
}
