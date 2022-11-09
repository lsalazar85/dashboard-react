import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import { IChart } from '../../../interfaces';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Chart = ({ color }: IChart) => {
  const data = {
    labels: ['', '', '', '', ''],
    datasets: [
      {
        label: 'VentuChart',
        data: [650000, 590000, 600000, 600000, 620000],
        backgroundColor: color,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <Bar
      style={{ marginTop: '2rem' }}
      options={options}
      data={data}
    />
  );
};

export default Chart;
