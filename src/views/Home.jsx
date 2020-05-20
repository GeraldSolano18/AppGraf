import React from 'react';
import '../assets/styles/App.scss';
import Slides from '../components/Slides';

const Home = () => {
  const images = [
    {
      id: '1x',
      src: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      titulo: 'el disenio es aerte',
    },
    {
      id: '2xx',
      src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      titulo: 'Al fin nos encontramos un buen curso estoy emocionado por seeguir viendo cuanto puedo aprender',
    },
    {
      id: '3xxx',
      src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      titulo: 'Deberia estudiar mas horas al diaaa',
      // eslint-disable-next-line comma-dangle
    },
    {
      id: '4xxx',
      src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      titulo: 'Deberia estudiar mas horas al diaaa',
      // eslint-disable-next-line comma-dangle
    },
    {
      id: '6x',
      src: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    // eslint-disable-next-line comma-dangle
  ];

  return (
    <div>
      <Slides
        interval={4000}
        images={images}
      />
    </div>

  );
};
export default Home;
