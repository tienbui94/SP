import React from 'react';
import {
    ComposedChart,
    ResponsiveContainer,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
const Chart = () => {
    const data = [
        {
            name: '0AM',
            sun: 4000,
            sea: 1300,
            amt: 2400
        },
        {
            name: '3AM',
            sun: 3000,
            sea: 2500,
            amt: 2210
        },
        {
            name: '6AM',
            sun: 2000,
            sea: 5000,
            amt: 2290
        },
        {
            name: '9AM',
            sun: 2780,
            sea: 6000,
            amt: 2000
        },
        {
            name: '12PM ',
            sun: 1890,
            sea: 7000,
            amt: 2181
        },
        {
            name: '3PM',
            sun: 2390,
            sea: 8500,
            amt: 2500
        },
        {
            name: '6PM',
            sun: 3490,
            sea: 7800,
            amt: 2100
        },
        {
            name: '9PM',
            sun: 3490,
            sea: 6000,
            amt: 2100
        },
        {
            name: '0AM',
            sun: 3490,
            sea: 4500,
            amt: 2100
        }
    ];

    const CustomizedDot = (props) => {
        const { cx, cy, value } = props;
        if (value > 2500) {
            return (
                <svg x={cx - 10} y={cy - 10} viewBox='0 0 64 64' width={22} height={20}>
                    <path
                        d='M62 30H47.9a15.9 15.9 0 0 0-3.2-7.8l10-10a2 2 0 0 0-2.8-2.8l-10 10a15.9 15.9 0 0 0-7.9-3.3V2a2 2 0 0 0-4 0v14.2a15.9 15.9 0 0 0-7.8 3.2l-10-10a2 2 0 1 0-2.8 2.8l10 10a15.9 15.9 0 0 0-3.2 7.8H2a2 2 0 1 0 0 4h14.2a15.9 15.9 0 0 0 3.2 7.8l-10 10a2 2 0 1 0 2.8 2.8l10-10a15.9 15.9 0 0 0 7.8 3.3V62a2 2 0 0 0 4 0V47.9a15.9 15.9 0 0 0 7.8-3.2l10 10a2 2 0 1 0 2.8-2.8l-10-10a15.9 15.9 0 0 0 3.3-7.9H62a2 2 0 1 0 0-4z'
                        fill='#ef750f'></path>
                </svg>
            );
        }

        return (
            <svg x={cx - 10} y={cy - 10} viewBox='0 0 64 64' width={22} height={20}>
                <path
                    d='M62 30H47.9a15.9 15.9 0 0 0-3.2-7.8l10-10a2 2 0 0 0-2.8-2.8l-10 10a15.9 15.9 0 0 0-7.9-3.3V2a2 2 0 0 0-4 0v14.2a15.9 15.9 0 0 0-7.8 3.2l-10-10a2 2 0 1 0-2.8 2.8l10 10a15.9 15.9 0 0 0-3.2 7.8H2a2 2 0 1 0 0 4h14.2a15.9 15.9 0 0 0 3.2 7.8l-10 10a2 2 0 1 0 2.8 2.8l10-10a15.9 15.9 0 0 0 7.8 3.3V62a2 2 0 0 0 4 0V47.9a15.9 15.9 0 0 0 7.8-3.2l10 10a2 2 0 1 0 2.8-2.8l-10-10a15.9 15.9 0 0 0 3.3-7.9H62a2 2 0 1 0 0-4z'
                    fill='#ef750f'></path>
            </svg>
        );
    };

    return (
        <>
            <div className='container text-center sun-rise-charts mt-5'>
                <ResponsiveContainer width='100%' height={300}>
                    <ComposedChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis tick={false} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type='monotone'
                            dataKey='sea'
                            stroke='#8884d8'
                            activeDot={<CustomizedDot />}
                        />
                        <Area type='monotone' dataKey='sun' stroke='#82ca9d' />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Chart;
