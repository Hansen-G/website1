import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import styles from './contact.module.css';
import linkArrow from '../../assets/linkArrow.svg';

const Contact = (props) => {
  const [visible, setVisible] = useState(false);

  const onScrollHandler = (isVisible) => {
    isVisible ? setVisible(true) : setVisible(false);
  };

  return (
    // <div class="Contact">
    //   <h2>Contact</h2>
    //   <div class="EmailContenter">
    //     <a class="Email" href='mailto:guohansen33@gmail.com'>guohansen33@gmail.com</a>
    //   </div>
    //   <div class="LinkedinContenter">
    //     <a class="Linkedin" href='https://www.linkedin.com/in/hansen-guo/'>Linkedin</a>
    //   </div>
    //   <div class="GitHubContenter">
    //     <a class="Github" href='https://github.com/Hansen-G'>Github</a>
    //   </div>
    //   <div class="CVContenter">
    //     <a class="CV" href='https://github.com/Hansen-G'>resume</a>
    //   </div>
    // </div>
    <div
      mode={props.mode}
      id='contact'
      className={styles.Contact + ' secondaryBackground'}
    >
      <h2 mode={props.mode} className={styles.Title + ' secondaryText'}>
        Contact
      </h2>
      <div className={styles.ContactLinks}>
        <div className={styles.Email}>
          <h4>
            <a
              className={visible ? styles.Visible : styles.Invisible}
              href='mailto:guohansen33@gmail.com'
            >
              guohansen33@gmail.com
            </a>
          </h4>
          <img
            mode={props.mode}
            src={linkArrow}
            className={
              visible
                ? styles.Visible + ' ' + styles.EmailArrow
                : styles.EmailArrow + ' ' + styles.Invisible
            }
            alt=''
          />
        </div>
        <div className={styles.Github}>
          <h4>
            <a
              className={
                visible
                  ? styles.Visible + ' secondaryText'
                  : styles.secondaryText + ' ' + styles.Invisible
              }
              mode={props.mode}
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Hansen-G'
            >
              github
            </a>
          </h4>
          <VisibilitySensor onChange={onScrollHandler}>
            <img
              className={
                visible
                  ? styles.Visible + ' ' + styles.GithubArrow
                  : styles.GithubArrow + ' ' + styles.Invisible
              }
              mode={props.mode}
              src={linkArrow}
              alt=''
            />
          </VisibilitySensor>
        </div>
        <div className={styles.Linkedin}>
          <h4>
            <a
              className={visible ? styles.Visible : styles.Invisible}
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/hansen-guo/'
            >
              linkedin
            </a>
          </h4>
          <img
            className={
              visible
                ? styles.Visible + ' ' + styles.LinkedinArrow
                : styles.LinkedinArrow + ' ' + styles.Invisible
            }
            mode={props.mode}
            src={linkArrow}
            alt=''
          />
        </div>
        <div className={styles.CV}>
          <h4>
            <a
              className={
                visible
                  ? styles.Visible + ' secondaryText'
                  : styles.secondaryText + ' ' + styles.Invisible
              }
              mode={props.mode}
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/file/d/1bx3mIsOq9aJlH0m_p2Bn9dP4GgyeP9Vk/view?usp=sharing'
            >
              resume
            </a>
          </h4>
          <img
            className={
              visible
                ? styles.Visible + ' ' + styles.CVArrow
                : styles.CVArrow + ' ' + styles.Invisible
            }
            mode={props.mode}
            src={linkArrow}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
