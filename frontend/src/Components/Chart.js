import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
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
import SunIcon from './sunIcon';
import MoonIcon from './moonIcon';
const Chart = () => {
    const data = [
        {
            name: '0AM',
            sea: 600,
            night: 0,
            sun: 0,
            amt: 2400
        },
        {
            name: '3AM',
            sea: 3000,
            night: 3600,
            sun: 3000,
            amt: 2210
        },
        {
            name: '6AM',
            sea: 2000,
            night: 3700,
            sun: 4000,
            amt: 2290
        },
        {
            name: '9AM',
            sea: 2780,
            night: 3800,
            sun: 5000,
            amt: 2000
        },
        {
            name: '12PM ',
            sea: 1890,
            night: 3900,
            sun: 6000,
            amt: 2181
        },
        {
            name: '3PM',
            sea: 2390,
            night: 4000,
            sun: 5000,
            amt: 2500
        },
        {
            name: '6PM',
            sea: 2490,
            night: 3900,
            sun: 4000,
            amt: 2100
        },
        {
            name: '9PM',
            sea: 1490,
            night: 3800,
            sun: 3000,
            amt: 2100
        },
        {
            name: '0AM',
            sea: 920,
            night: 0,
            sun: 0,
            amt: 2100
        }
    ];

    const CustomizedDot = (props) => {
        const { cx, cy, day } = props;
        if (day) {
            return <SunIcon cx={cx} cy={cy} />;
        }

        return <MoonIcon cx={cx} cy={cy} />;

        // for night
    };

    return (
        <>
            <ScrollContainer
                horizontal={true}
                vertical={false}
                hideScrollbars={false}
                style={{ display: 'inline-block', width: '100%', height: '100%' }}>
                <div className='container text-center sun-rise-charts mt-5'>
                    <ResponsiveContainer width={1000} height={300}>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5
                            }}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='name' />
                            <YAxis tick={false} hide={true} />
                            <Tooltip
                                cursor={true}
                                contentStyle={{ fontSize: 10 }}
                                labelStyle={{ fontSize: 10 }}
                            />
                            <Legend />
                            <Line
                                legendType='none'
                                dot={false}
                                type='monotone'
                                dataKey='sun'
                                stroke='#FF4500'
                                strokeDasharray='3 3'
                                activeDot={<CustomizedDot day />}
                            />
                            <Area
                                type='monotone'
                                dataKey='sea'
                                stroke='#8884d8'
                                legendType='none'
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width={1000} height={300}>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5
                            }}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='name' />
                            <YAxis tick={false} hide={true} />
                            <Tooltip
                                active={true}
                                cursor={false}
                                contentStyle={{ fontSize: 10 }}
                                labelStyle={{ fontSize: 10 }}
                            />
                            <Legend />
                            <Line
                                legendType='none'
                                dot={false}
                                type='monotone'
                                dataKey='night'
                                stroke='#FF4500'
                                strokeDasharray='3 3'
                                activeDot={<CustomizedDot night />}
                            />
                            <Area
                                type='monotone'
                                dataKey='sea'
                                stroke='#8884d8'
                                legendType='none'
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width={1000} height={300}>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5
                            }}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='name' />
                            <YAxis tick={false} hide={true} />
                            <Tooltip
                                active={true}
                                cursor={false}
                                contentStyle={{ fontSize: 10 }}
                                labelStyle={{ fontSize: 10 }}
                            />
                            <Legend />
                            <Line
                                legendType='none'
                                dot={false}
                                type='monotone'
                                dataKey='sun'
                                stroke='#FF4500'
                                strokeDasharray='3 3'
                                activeDot={<CustomizedDot day />}
                            />
                            <Area
                                type='monotone'
                                dataKey='sea'
                                stroke='#8884d8'
                                legendType='none'
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width={1000} height={300}>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5
                            }}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='name' />
                            <YAxis tick={false} hide={true} />
                            <Tooltip
                                active={true}
                                cursor={false}
                                contentStyle={{ fontSize: 10 }}
                                labelStyle={{ fontSize: 10 }}
                            />
                            <Legend />
                            <Line
                                legendType='none'
                                dot={false}
                                type='monotone'
                                dataKey='night'
                                stroke='#FF4500'
                                strokeDasharray='3 3'
                                activeDot={<CustomizedDot night />}
                            />
                            <Area
                                type='monotone'
                                dataKey='sea'
                                stroke='#8884d8'
                                legendType='none'
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </ScrollContainer>
        </>
    );
};

export default Chart;
