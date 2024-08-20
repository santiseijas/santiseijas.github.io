import React from 'react';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
