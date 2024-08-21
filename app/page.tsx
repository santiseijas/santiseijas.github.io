import React from 'react';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div >
      <Header />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
