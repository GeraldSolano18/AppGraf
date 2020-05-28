/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from "react";
import Chart from "react-apexcharts";
import { connect } from 'react-redux';
import { addCategorie, addData } from '../redux/actions/ChartAction';
import '../assets/styles/components/Charts.scss';

const Hmm = ({ options, series, addCategorie, categories, data, addData }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(categories);
    // console.log(data);

    const categorie = e.target[0].value;
    const dato = e.target[1].value;
    addCategorie(categorie);
    addData(Number(dato));

    // console.log(options);
    //console.log('aarriba options');
    e.target[0].value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='foorm'>
        <input type='text' className='boxu' placeholder='agregar nuevo' />
        <input type='text' className='boxu' placeholder='agregar nuevo' />
        <button type='submit' className='subu'> agregar </button>
      </form>
      <div className='pprue'>
        <Chart
          options={options}
          series={series}
          type='line'
          height='300'
          width='500'

        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    options: state.Chart.options,
    series: state.Chart.series,
    categories: state.Chart.options.xaxis.categories,
    data: state.Chart.series[0].data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCategorie: (categorie) => dispatch(addCategorie(categorie)),
    addData: (dato) => dispatch(addData(dato)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Hmm);
