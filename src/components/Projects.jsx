import React from 'react';
import { projects } from '../utill/projects';
import * as styles from '../styles/projects.module.css';
import { StaticImage } from 'gatsby-plugin-image';
const Projects = () => {
  return (
    <>
      <StaticImage
        className={styles.projects_yellow}
        src='../images/yellow_layer.png'
        alt='yellow layer'
      ></StaticImage>
      <div
        id='project'
        className={styles.projects_background}
      >
        <div>
          <h2 className={styles.projects_text}>PROJECTS</h2>
          <p className={styles.projects_paragraph}>
            Experienced team with unique insights and sector-specific knowledge
            in building transformative blockchain solutions can assist you to
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
                  <a href={value.link}>
                    {index === 9 ? (
                      <img
                        id='midih_logo'
                        className={styles.project_card_img}
                        alt='project card'
                        src={value.picture}
                      />
                    ) : (
                      <img
                        className={styles.project_card_img}
                        alt='project card'
                        src={value.picture}
                      />
                    )}
                  </a>
                  <p>{value.project}</p>
                  <p>{value.description}</p>
                  <p>{value.stack}</p>
                </div>
              );
            })}
          </div>
          {/* <h2 className={styles.projects_text}>Relevant EU funded projects</h2>
          <div className={styles.projects}>
            {Object.entries(EUProjects).map(([key, value], index) => {
              return (
                <div
                  className={styles.project_card}
                  key={key}
                >
                  <a href={value.link}>
                    {index === 1 ? (
                      <img
                        id={styles['midih_logo']}
                        className={styles.project_card_img}
                        alt='project card'
                        src={value.picture}
                      />
                    ) : (
                      <img
                        className={styles.project_card_img}
                        alt='project card'
                        src={value.picture}
                      />
                    )}
                  </a>
                  <p>{value.project}</p>
                  <p>{value.description}</p>
                  <p>{value.stack}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
