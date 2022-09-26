import React from 'react';
import { projects } from '../utill/projects';
import { EUProjects } from '../utill/EUProjects';
import * as styles from '../styles/projects.module.css';
const Projects = () => {
  console.log(projects);
  return (
    <div
      id='project'
      className={styles.projects_background}
    >
      <div>
        <h2 className={styles.projects_text}>
          Relevant Web 3.0 and Blockchain projects
        </h2>
        <div className={styles.projects}>
          {Object.entries(projects).map(([key, value]) => {
            return (
              <div
                className={styles.project_card}
                key={key}
              >
                <a href={value.link}>
                  <img
                    className={styles.project_card_img}
                    alt='project card'
                    src={value.picture}
                  />
                </a>
                <p>{value.project}</p>
                <p>{value.description}</p>
                <p>{value.stack}</p>
              </div>
            );
          })}
        </div>
        <h2 className={styles.projects_text}>Relevant EU funded projects</h2>
        <div className={styles.projects}>
          {Object.entries(EUProjects).map(([key, value], index) => {
            return (
              <div className={styles.project_card}>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
