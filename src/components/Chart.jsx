import React from "react";
import Chart from "react-apexcharts";
// import { Table } from 'jspdf-react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/components/Charts.scss';
import { addTodo } from "../redux/actions/ChartAction";

const Hmm = () => {
  //Hooks Para redux
  const options = useSelector((store) => store.Chart.options);
  const series = useSelector((store) => store.Chart.series);
  const dispatch = useDispatch();

  // const cat = useSelector((store) => store.Chart.options.xaxis.categories);
  // const data = useSelector((store) => store.Chart.series[0].data);

  // const Prints = () => (
  //   <table className='table table-bordered table-dark'>
  //     <thead>
  //       <tr>
  //         {cat.map((categorie) => <td>{categorie}</td>) }
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         {data.map((dato) => <td>{dato}</td>) }
  //       </tr>
  //       <div>
  //         Este es tu reporte de ventas mensuales
  //       </div>
  //     </tbody>
  //   </table>
  // );

  // const generatePDF = () => {
  //   const doc = jsPDF();
  //   const string = renderToString(<Prints />);
  //   doc.setFont('helvetica');
  //   doc.setFontType('normal');
  //   doc.fromHTML(string);
  //   doc.save('demo.pdf');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const categorie = e.target[0].value;
    const dato = e.target[1].value;
    dispatch(addTodo({ category: categorie, data: dato }));

    e.target[0].value = '';
    e.target[1].value = '';
  };
  console.log(options);
  console.log(series);

  return (
    <>
      <div className='grid'>
        <div className='centar'>
          <p className='from-title'>Agregar nueva venta del mes</p>
          <form onSubmit={handleSubmit}>
            <input type='text' className='boxu' placeholder='Mes' />
            <input type='text' className='boxu' placeholder='Total de venta' />
            <button type='submit' className='subu'> Agregar </button>
          </form>
        </div>
        <div className='centar'>
          <Chart
            options={options}
            series={series}
            type='line'
            height='350'
            width='550'
          />
          <button type='submit' className='subu'> Generar Pdf </button>
        </div>

      </div>

    </>
  );
};

export default Hmm;
