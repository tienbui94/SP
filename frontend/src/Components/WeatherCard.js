import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
const WeatherCard = ({ ...props }) => {
    const celsius = () => <span>&#8451;</span>;
    const { main, wind, dt, weather = [], name } = props;
    const date = moment.unix(dt).utc().format('dddd, MMMM do, YYYY');
    return (
        <Card border='light' className='weather-card'>
            <Card.Body>
                <Card.Title>
                    <h3>{weather.length > 0 && weather[0].main}</h3>
                    <h3>
                        {main?.temp}
                        {celsius()}
                    </h3>
                    <Card.Img
                        src={`http://openweathermap.org/img/wn/${
                            weather.length > 0 && weather[0].icon
                        }@2x.png`}
                    />
                    <h2> {name}</h2>
                    <p>{date}</p>

                    <p>
                        Min: {`${main?.temp_min}`}
                        {celsius()}
                    </p>
                    <p>
                        Max: {main?.temp_max}
                        {celsius()}
                    </p>
                    <p>Humidity: {main?.humidity}%</p>
                    <p>Wind: {wind?.speed}mph</p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
