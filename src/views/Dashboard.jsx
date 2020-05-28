/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import '../assets/styles/views/Dashboard.scss';

import SideBar from '../components/SideBar';
import Car from "./Car";
import Teacher from '../components/Teacher';
import Dashh1 from '../components/Dashh1';
import Estudiante from '../components/Estudiante/Estudiante';

const Dashboard = (props) => {
  const { user, Profesores } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <>
      <div className='pruebaGrid'>
        <div className='sidebar'>
          <SideBar />
        </div>

        {hasUser && user.email === 'profe' ?
          null : (
            <div className='contenedorhm'>
              <Dashh1 />
            </div>
          )}

        {hasUser && user.email === 'profe' ? (
          <div className='teachers'>
            <Estudiante />
          </div>
        ) : (
          <div className='teachers'>
            <Fade>
              <Car>
                {Profesores.map((item) => <Teacher key={item.Id} {...item} />) }
              </Car>
            </Fade>
          </div>
        )}

      </div>

    </>
  );
};
const mapStateToProps = (state) => {
  return {
    Profesores: state.LoginOut.Profesores,
    user: state.LoginOut.user,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
