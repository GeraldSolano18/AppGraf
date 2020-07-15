/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { SideBar } from '../components/ReadSideBar';
import cubos from '../assets/static/cubos.png';
import '../assets/styles/App.scss';
//import Slides from '../components/Slides';

const Home = () => {

  return (
    <>
      <div className='container_home'>
        <img className='cubos_banner' src={cubos} alt='' />
        <div className='container_title_absolute'>
          classname container title
        </div>
      </div>
      <SideBar />
    </>

  );
};
export default Home;
