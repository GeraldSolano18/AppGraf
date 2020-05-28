/* eslint-disable no-fallthrough */
import { ADD_CATEGORIE, ADD_DATA } from "../actions/ChartAction";

const initialState = {
  options: {
    chart: {
      background: "f4f4f4",
      foreColor: "#333",
    },
    xaxis: {
      categories: [
        'Enero',
        'ebrero',
        'ebrero',
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

    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Nivel de ventas anual',
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
      data: [53, 37, 67],
    },
  ],
};

const Chart = (state = initialState, action) => {

  switch (action.type) {
    case ADD_CATEGORIE:
      return {
        ...state,
        options: {
          ...state.options,
          xaxis: {
            ...state.xaxis,
            // categories: [
            //   ...state.options.xaxis.categories,
            //   action.payload,
            // ],
            categories: state.options.xaxis.categories.push(action.payload),
          },

        },
      };
    case ADD_DATA:
      console.log({
        ...state,
        series: [
          // data: [
          //   ...state.series[0].data,
          //   action.payload,
          // ],
          { data: state.series[0].data.push(action.payload) },

        ],
      });
      return state;
      // return {
      //   ...state,
      //   series: [
      //     // data: [
      //     //   ...state.series[0].data,
      //     //   action.payload,
      //     // ],
      //     { data: state.series[0].data.push(action.payload) },

      //   ],
      // };
    default:
      return state;
  }

};
export default Chart;
