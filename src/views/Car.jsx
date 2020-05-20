import React from 'react';
import '../assets/styles/components/Car.scss';

const Car = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      {children}
    </div>
  </section>
);
export default Car;
