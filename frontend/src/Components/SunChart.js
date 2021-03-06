import CanvasJSReact from '../assets/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const listColors = {
    seaLevel: 'rgb(102, 178, 255)',
    sunLevel: 'rgb(255, 100, 0)',
    white: 'rgb(255,255,255)'
};

const SunChart = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: 'light1',
        title: {
            text: 'Tide & Sunrise & Sunset'
        },
        axisY: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: () => {
                return '';
            }
        },
        axisX: {
            title: '',
            interval: 5
        },
        data: [
            {
                type: 'splineArea',
                markerType: 'circle',
                markerSize: '0',
                toolTipContent: 'Sun {x}',
                color: listColors.white,
                dataPoints: [
                    {
                        x: 1,
                        y: 0,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 10,
                        y: 15,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 20,
                        y: 25,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 30,
                        y: 35,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 40,
                        y: 40,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 50,
                        y: 40,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 60,
                        y: 35,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 70,
                        y: 25,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 80,
                        y: 10,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    },
                    {
                        x: 90,
                        y: 0,
                        color: listColors.sunLevel,
                        lineColor: listColors.sunLevel,
                        markerImageUrl: 'http://i.imgur.com/TUmQf5n.png',
                        backgroundColor: listColors.sunLevel,
                        fillColor: listColors.sunLevel
                    }
                ]
            },
            {
                type: 'splineArea',
                markerType: 'none',
                toolTipContent: 'Tide {x}',
                color: listColors.seaLevel,
                dataPoints: [
                    {
                        x: 1,
                        y: 5,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 10,
                        y: 15,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 20,
                        y: 6,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 30,
                        y: 17,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 40,
                        y: 15,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 50,
                        y: 19,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 60,
                        y: 25,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 70,
                        y: 10,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 80,
                        y: 5,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    },
                    {
                        x: 90,
                        y: 18,
                        lineColor: listColors.seaLevel,
                        backgroundColor: listColors.seaLevel,
                        fillColor: listColors.seaLevel
                    }
                ]
            }
        ]
    };

    return (
        <>
            <div className='container text-center sun-rise-charts mt-5'>
                <CanvasJSChart options={options} />
            </div>
        </>
    );
};

export default SunChart;
