import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const SunChart = () => {
    const initData = {
        labels: [],
        datasets: [
            {
                data: [65, 59, 80, 81, 56],
                lineTension: 0.5,
                borderWidth: 2,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)'
            }
        ]
    };
    const [data, setData] = useState(initData);
    const options = {
        title: {
            display: true,
            fontSize: 20
        },
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [
                {
                    display: false,
                    ticks: {
                        suggestedMin: 20,
                        suggestedMax: 45
                    }
                }
            ],
            gridLines: {
                color: 'blue'
            }
        }
    };

    const { hourly } = useSelector((state) => state.home.forecast);
    console.log(hourly, 'hourly');
    // const [data, setData] = useState(initData);

    useEffect(() => {
        if (hourly) {
            let changeData = { ...data };
            const x = 60;
            let times = [];
            let tt = 0;
            const app = ['AM', 'PM'];

            for (let i = 0; tt < 24 * 60; i++) {
                const hh = Math.floor(tt / 60);
                times[i] = (hh % 12) + app[Math.floor(hh / 12)];

                tt = tt + x;
            }

            changeData.labels = times;
            let set = [];

            hourly.forEach((hour, i) => {
                if (i < 24) {
                    set.push(Math.round(hour.temp));
                }
            });
            changeData.datasets[0].data = set;

            setData(changeData);
        }
    }, [hourly, data]);

    return <Line data={data} options={options} />;
};

export default SunChart;
