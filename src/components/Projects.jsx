import React from 'react';
import * as styles from '../styles/projects.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Projects = () => {
  return (
    <div
      id='project'
      className={styles.projects_background}
    >
      <div className={styles.project_wrapper}>
        <h2 className={styles.projects_text}>PROJECTS...</h2>
        <div className={styles.projects}>
          {Array(10)
            .fill(0)
            .map((__, index) => {
              return (
                <div
                  key={index}
                  className={styles.project_card}
                >
                  <StaticImage
                    alt='project card'
                    src='../images/test_card.jpeg'
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
