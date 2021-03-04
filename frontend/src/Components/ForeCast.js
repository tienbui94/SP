import { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOWForeCast } from '../Reducers/homeReducer';
import moment from 'moment';
import celsius from './Celsius';
import mathRound from '../Utils/mathRound';
const ForeCast = ({ coord, appid }) => {
    const dispatch = useDispatch();
    const { forecast } = useSelector((state) => state.home);
    const dailyData = forecast?.daily;
    useEffect(() => {
        if (coord && appid) {
            return dispatch(
                fetchOWForeCast({ lat: coord.lat, lon: coord.lon, appid, units: 'metric' })
            );
        }
    }, [dispatch, coord, appid]);

    return (
        <>
            <div className='container forecast-list-item'>
                {dailyData.length > 0 &&
                    dailyData.map((data, index) => (
                        <Col key={index} xs={6} md={3} className='my-2 forecast-item'>
                            <Card border='light'>
                                <Card.Header className='text-center font-weight-bolder'>
                                    <span>{moment.unix(data?.dt).utc().format('dddd')}</span>
                                </Card.Header>
                                <Card.Img
                                    src={`http://openweathermap.org/img/wn/${
                                        data?.weather.length > 0 && data?.weather[0].icon
                                    }@2x.png`}
                                />
                                <Card.Body>
                                    <div className='title-forecast-item'>
                                        <h4>{data?.weather && data?.weather[0].description}</h4>
                                    </div>
                                    <h3 className='font-weight-bolder text-center'>
                                        {mathRound(data?.temp?.min)}
                                        {celsius()} - {mathRound(data?.temp?.max)}
                                        {celsius()}
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </div>
        </>
    );
};
export default ForeCast;
