import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
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
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

function Chart(props)
{
    let labels = props.data?.map((data) => data.date.toDateString());

    let data = {
        labels,
        datasets: [
            {
              label: 'High',
              data: props.data?.map((data) => data.high),
              borderColor: 'aquamarine',
              backgroundColor: 'aquamarine',
            },
            {
              label: 'Low',
              data: props.data?.map((data) => data.low),
              borderColor: 'deeppink',
              backgroundColor: 'deeppink',
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