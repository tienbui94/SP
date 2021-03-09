import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import celsius from './Celsius';
import mathRound from '../Utils/mathRound';
import PropTypes from 'prop-types';
const WeatherCard = ({ ...props }) => {
    const { main, wind, dt, weather = [], name } = props;
    const date = moment.unix(dt).utc().format('dddd, MMMM do, YYYY');
    return (
        <Card border='light' className='weather-card'>
            <Card.Body>
                <Card.Title>
                    <h3>{weather.length > 0 && weather[0].main}</h3>
                    <h3 className='font-weight-bolder'>
                        {mathRound(main?.temp)}
                        {celsius()}
                    </h3>
                    <Card.Img
                        src={`http://openweathermap.org/img/wn/${
                            weather.length > 0 && weather[0].icon
                        }@2x.png`}
                    />
                    <h2> {name}</h2>
                    <p>{date}</p>

                    <h3 className='text-center font-weight-bolder'>
                        {`${mathRound(main?.temp_min)}`}
                        {celsius()} - {mathRound(main?.temp_max)}
                        {celsius()}
                    </h3>
                    <p>
                        <i className='fas fa-water'></i> {main?.humidity} %
                    </p>
                    <p>
                        <i className='fas fa-wind'></i> {wind?.speed} m/s
                    </p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

WeatherCard.propTypes = {
    main: PropTypes.object,
    wind: PropTypes.object,
    dt: PropTypes.string,
    weather: PropTypes.array,
    name: PropTypes.string
};

export default WeatherCard;
