import { ADD_TODO } from '../actions/ChartAction';
//COnfiguracion inicial del chart
const initialState = {
  options: {
    chart: {
      background: "f4f4f4",
      id: 'myChart',
      foreColor: "#333",
    },
    xaxis: {
      categories: [
        'Enero',
        'Febrero',
        'Marzo',
      ],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      colors: ["#9A10AD"],
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
    },
    title: {
      text: 'Nivel de ventas mensual',
      align: 'center',
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: '25px',
      },

    },
  },
  series: [
    {
      data: [53, 60, 45],
    },
  ],
};

const Chart = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO: {
      //enviar al estado actual el valor que viene del payload
      state.options.xaxis.categories.push(action.payload.category);
      state.series[0].data.push(Number(action.payload.data));
      //creamos una constante que almacena todos los valores que contiene el objeto en el estado
      const { data } = state.series[0];
      const { categories } = state.options.xaxis; /* esto va a ser un comentario cntrl shift a */
      return {
        options: {
          ...state.options,
          xaxis: {
            ...state.options.xaxis,
            categories,
          },
        },
        series: [{ data }],
      };
    }
    default:
      return state;
  }

};
export default Chart;
