import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
    },
    scales: {
        xAxis: {
            grid: { color: 'whitesmoke' },
            ticks: { color: 'black', font: { size: 9, weight: 'bold' }, maxRotation: 0 }
        },
        yAxis: {
            position: 'right',
            grid: { color: 'whitesmoke' },
            ticks: { color: 'black', font: { size: 11, weight: 'bold' } }
        },
    }
};

function Chart(props)
{
    let labels = props.data?.map((data) => data.date.getDate());

    let data = {
        labels,
        datasets: [
            // {
            //   label: 'High',
            //   data: props.data?.map((data) => data.high),
            //   borderColor: 'deeppink',
            //   backgroundColor: 'deeppink',
            // },
            {
              fill: true,
              label: 'Close',
              data: props.data?.map((data) => data.close),
              borderColor: 'aquamarine',
              backgroundColor: '#e6fff7',
            },
        ],
    };

    return (
        <div className="component chart">
            <Line options={options} data={data} height={175} />
        </div>
    );
}

export default Chart;