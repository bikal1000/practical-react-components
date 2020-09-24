import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
function ChartSection() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales for 2020(M)',
        data: [10, 5, 4, 9, 5],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(255,206,86,0.2)'],
        pointBackgroundColor: ['rgba(255,206,86,0.2)'],
        pointBorderColor: ['rgba(255,206,86,0.2)'],
      },
      {
        label: 'Sales for 2019(M)',
        data: [1, 5, 5, 4, 5],
        borderColor: ['rgba(54,162,235,0.2)'],
        backgroundColor: ['rgba(54,162,235,0.2)'],
        pointBackgroundColor: ['rgba(54,162,235,0.2)'],
        pointBorderColor: ['rgba(54,162,235,0.2)'],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: 'Line Chart',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 15,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ChartSection;
