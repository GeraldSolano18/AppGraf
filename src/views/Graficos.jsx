import React from 'react';
import Hmm from '../components/Chart';
//import ChartClass from '../components/ChartClass';
import SideBar from '../components/SideBar';

const Graficos = () => {
  return (
    <>
      <div className='pruebaGrid'>
        <div className='sidebar'>
          <SideBar />
        </div>

        <div>
          <Hmm />
        </div>
        {/* <div>
            <ChartClass />
          </div> */}
      </div>

    </>
  );
};

export default Graficos;
