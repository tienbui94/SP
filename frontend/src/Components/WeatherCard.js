import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
const WeatherCard = (props) => {
    const { coord, main, wind, clouds, dt, weather, sys, name, timezone } = props;
    console.log({ coord, sys, timezone, wind, clouds });
    const date = moment.unix(dt).utc().format('MMMM do, dddd, YYYY');
    return (
        <Card border='light' className='weather-card'>
            <Card.Img
                className='weather-card-img'
                variant='top'
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            />
            <Card.Body>
                <Card.Title>
                    <h3>
                        {main.temp} <span>&#8451;</span>
                    </h3>
                    <p>{date}</p>
                    <p>{name}</p>
                    <p>
                        Min: {`${main.temp_min}`} <span>&#8451;</span>
                    </p>
                    <p>
                        Max: {main.temp_max} <span>&#8451;</span>
                    </p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
