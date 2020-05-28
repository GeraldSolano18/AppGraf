import React, { useState } from 'react';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import '../assets/styles/components/Teacher.scss';

import star from '../assets/static/st.svg';
import seen from '../assets/static/mirando.svg';

Modal.setAppElement('#app');

const Teacher = (props) => {
  const { Nombre, Apellido, Profesion, Icon, Puntaje, Popularidad, Comentarios } = props;
  const [modalIsOPen, setModalIsOPen] = useState(false);

  return (
    <>
      <Zoom>
        <div className='carousel-item'>
          <div className='carousel-item__details'>
            <div className='cartHome'>
              <img src={Icon} className='cartIcon' alt='' />
              <p className='cartP'>{`${Nombre} ${Apellido} `}</p>
              <div className='cartContenido'>
                {Profesion}
                <br />
                <div className='con_btn'>
                  <button
                    onClick={() => setModalIsOPen(true)}
                    type='button'
                    className='cartButton'
                  >
                    <img src={seen} className='btn_Modal' alt='' />
                  </button>
                  <button
                    onClick={() => setModalIsOPen(true)}
                    type='button'
                    className='cartButton'
                  >
                    <img src={star} className='btn_Modal' alt='' />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Zoom>

      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          content: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
            width: '400px',
            border: '1px solid red',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
        }}
        isOpen={modalIsOPen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOPen(false)}
      >
        <button type='button' onClick={() => setModalIsOPen(false)}>X</button>
        <Fade>
          <img src={Icon} className='cartIcon' alt='' />
          <h2>
            <p className='cartP'>{`${Nombre} ${Apellido} `}</p>

            <p className='profesion'>
              {Profesion}
            </p>

          </h2>
          <div className='infoGroup'>
            <p>{`Puntaje: ${Puntaje}`}</p>
          </div>
          <div className='infoGroup'>
            <p>{`Popularidad: ${Popularidad}`}</p>
          </div>
          <div className='infoGroup'>
            <p>{`Comentarios: ${Comentarios}`}</p>
          </div>

        </Fade>

      </Modal>
    </>

  );
};
const mapDispatchToProps = (state) => {
  return {
    Profesores: state.Profesores,
  };
};

export default connect(null, mapDispatchToProps)(Teacher);
