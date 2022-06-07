import React from 'react';
import hgpic from '../../assets/hg-portfolio.jpg';
import styles from './main.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';

const main = props => {
  const arrow = props.mode === 'light' ? arrowLight : arrowDark

  return (
    <div id='main' className={styles.Main}>
      <img className={styles.Pic} src={hgpic} alt='' />
      <h1 mode={props.mode} className={styles.Title + ' text'}>
        Hansen
        <br />
        Guo
      </h1>
      <h4 className={styles.SecondaryTitle}>full stack developer</h4>
      <img mode={props.mode} className={styles.Arrow} src={arrow} alt=""/>
    </div>
  );
};

export default main;