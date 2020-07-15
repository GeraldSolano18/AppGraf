/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  updateCharts() {
    const categories = [];

    this.setState({
      categories,
    });
  }

  render() {
    return (
      <div className='grid'>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          width='500'
        />
        <div>
          <button type='button' onClick={this.updateCharts}>Update!</button>
        </div>
      </div>

    );
  }
}

export default ChartClass;
