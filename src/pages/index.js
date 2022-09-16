import * as React from 'react';
import Header from '../components/Header';
import WhatWeDo from '../components/WhatWeDo';
import Development from '../components/Development';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import '../styles/normalize.css';
import '../styles/skeleton.css';
import Navbar from '../components/Navbar';

const IndexPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <WhatWeDo></WhatWeDo>
      <Development></Development>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
