import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Skeleton from '@mui/material/Skeleton';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default function HeaderGraph() {
    const [activeLink, setActiveLink] = useState(0);
    const colors = ['#00B8FF', '#FF62CE', '#00CF35'];
    const name = ['Notes', 'New followers', 'Total followers'];
    const loading = false;

    const data = {
        labels: [
            '12/26/2021',
            '12/26/2021',
            '12/26/2021',
            '12/26/2021',
            '12/26/2021',
            '12/26/2021',
            '12/26/2021'
        ],
        datasets: [
            {
                label: name[activeLink],
                fill: false,
                lineTension: 0.1,
                backgroundColor: colors[activeLink],
                borderColor: colors[activeLink],
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                color: '#fff'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                ticks: {
                    color: '#fff'
                }
            }
        }
    };
    return (
        <div className="graph">
            <div className="gra">
                {loading ? (
                    <Skeleton height={400} />
                ) : (
                    <Line data={data} options={options} />
                )}
            </div>
            <div className="btns">
                <span
                    className={`box ${activeLink === 0 ? 'active0' : ''}`}
                    onClick={() => setActiveLink(0)}
                >
                    <span>0</span>
                    <span>Notes</span>
                </span>
                <span
                    className={`box ${activeLink === 1 ? 'active1' : ''}`}
                    onClick={() => setActiveLink(1)}
                >
                    <span>0</span>
                    <span>New followers</span>
                </span>
                <span
                    className={`box ${activeLink === 2 ? 'active2' : ''}`}
                    onClick={() => setActiveLink(2)}
                >
                    <span>0</span>
                    <span>Total followers</span>
                </span>
            </div>
        </div>
    );
}
