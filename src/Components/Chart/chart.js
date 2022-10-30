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
            ticks: { color: 'darkslategrey', font: { size: 9, weight: 'bold' }, maxRotation: 0 }
        },
        yAxis: {
            position: 'right',
            grid: { color: 'whitesmoke' },
            ticks: { color: 'darkslategrey', font: { size: 11, weight: 'bold' } }
        },
    }
};

function Chart(props)
{
    let labels = props.data?.map((data) => data.date.toDateString());

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
              borderColor: '#99ffdd',
              backgroundColor: '#ccffee',
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