import { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOWForeCast } from '../Reducers/homeReducer';
import moment from 'moment';
const ForeCast = ({ coord, appid }) => {
    const dispatch = useDispatch();
    const celsius = () => <span>&#8451;</span>;
    const { forecast } = useSelector((state) => state.home);
    const dailyData = forecast?.daily;
    useEffect(() => {
        dispatch(fetchOWForeCast({ lat: coord.lat, lon: coord.lon, appid, units: 'metric' }));
    }, [dispatch, coord, appid]);

    return (
        <>
            {dailyData.length > 0 &&
                dailyData.map((data, index) => (
                    <Col key={index} xs={3} md={2} className='my-2 forecast-item'>
                        <Card border='light'>
                            <Card.Header>
                                <span>{moment.unix(data?.dt).utc().format('dddd')}</span>
                            </Card.Header>
                            <Card.Img
                                src={`http://openweathermap.org/img/wn/${
                                    data?.weather.length > 0 && data?.weather[0].icon
                                }@2x.png`}
                            />
                            <Card.Body>
                                <h4>{data?.weather && data?.weather[0].main}</h4>
                                <p>
                                    {Math.round(data?.temp?.min)}
                                    {celsius()} - {Math.round(data?.temp?.max)}
                                    {celsius()}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </>
    );
};
export default ForeCast;
