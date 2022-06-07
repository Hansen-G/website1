import React from 'react';
import styles from './about.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';

const about = (props) => {
  const arrow = props.mode === 'light' ? arrowLight : arrowDark;

  return (
    <div id='about' className={styles.About}>
      <div className={styles.AboutContainer}>
        <h2 mode={props.mode} className={styles.Title + ' text'}>
          About me
        </h2>
        <p className={styles.Note}>
          Hansen Guo is a Computer Science and Systems Engineering graduate student at Johns Hopkins University. He has a strong passion for software development, machine learning, and sustainable development.
          <br />
          <br />
          Hansen received his bachelor’s degree in Building Engineering &amp Management from The Hong Kong Polytechnic University with first-class honour and Dean’s honour. At The Hong Kong Polytechnic University, Hansen conducted extensive research on the application of engineering technology in the sustainable power grid and sustainable buildings and published two papers. In addition, he developed an integrated framework of construction project performance recovery evaluation in the post-COVID-19 pandemic.
          <br />
          <br />
          Hansen has also worked as an advisory intern at Arup, where he solved the real-world issues facing sustainable development. Together with his team, he proposed a systematic development strategy to implement environmentally sustainable business practices at the headquarters and K-12 school of Tencent Future Sci-Tech City in Shenzhen, and provide sustainable development strategies for other companies. He now works as a Development Associate at United Nations Volunteers to research and develop projects and organizational strategies for sustainable development in Africa.
        </p>
      </div>

      <img className={styles.Arrow} src={arrow} alt='' />
    </div>
  );
};

export default about;
