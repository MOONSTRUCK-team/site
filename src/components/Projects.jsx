import React from 'react';
import { projects } from '../utill/projects';
import * as styles from '../styles/projects.module.css';
import { StaticImage } from 'gatsby-plugin-image';
const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <StaticImage
        className={styles.projects_yellow}
        src='../images/yellow_layer2.png'
        alt='yellow layer'
      ></StaticImage>
      <div
        id='project'
        className={styles.projects_background}
      >
        <h2 className={styles.projects_text}>PROJECTS</h2>
        <p className={styles.projects_paragraph}>
          Experienced team with unique insights and sector-specific knowledge in
          building transformative blockchain solutions can assist you to
          accelerate your company with hands-on development support from
          inception through all ahases of growth.
        </p>
        <div className={styles.projects}>
          {Object.entries(projects).map(([key, value], index) => {
            return (
              <div
                key={key}
                className={styles.project_card}
              >
                <a
                  target='_blank'
                  href={value.link}
                >
                  <img
                    className={styles.project_card_img}
                    alt='project card'
                    src={value.picture}
                  />
                </a>
                <h2>{value.name}</h2>
                <p>{value.project}</p>
                <p>{value.description}</p>
                <p>{value.stack}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
