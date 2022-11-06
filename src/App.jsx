import React from 'react';
import Header from './components/header/Header'
import './index.css' 
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />
    
    </>
  )
}

export default App;