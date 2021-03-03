import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import moment from 'moment';
const SunChart = () => {
    const celsius = () => <span>&#8451;</span>;
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
    const [chartData] = useState(initData);
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

    const { hourly, current } = useSelector((state) => state.home.forecast);
    console.log(current, 'current');
    useEffect(() => {
        if (hourly) {
            const x = 60;
            let times = [];
            let tt = 0;
            const app = ['AM', 'PM'];

            for (let i = 0; tt < 24 * 60; i++) {
                const hh = Math.floor(tt / 60);
                times[i] = (hh % 12) + app[Math.floor(hh / 12)];

                tt = tt + x;
            }
            let set = [];
            hourly.forEach((hour, i) => {
                if (i < 24) {
                    set.push(Math.round(hour.temp));
                }
            });

            chartData.labels = times;
            chartData.datasets[0].data = set;
        }
    }, [hourly, chartData]);

    return (
        <>
            <div className='current-weather'>
                <div>
                    {Math.round(current.temp)} {celsius()}
                </div>
                <Image
                    style={{ width: 120, height: 120 }}
                    src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`}
                />
            </div>
            <div className='sun-time'>
                <div className='sunrise-time mr-4'>{moment.unix(current.sunrise).format('LT')}</div>
                <div className='sunset-time ml-4'>{moment.unix(current.sunset).format('LT')}</div>
            </div>

            <Line data={chartData} options={options} />
        </>
    );
};

export default SunChart;
