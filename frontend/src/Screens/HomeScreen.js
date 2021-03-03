import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchBar from '../Components/SearchBar';
import WeatherCard from '../Components/WeatherCard';
import { fetchOpenWeatherData } from '../Reducers/homeReducer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import SunChart from '../Components/SunChart';
import ForeCast from '../Components/ForeCast';
const HomeScreen = () => {
    const WEATHER_APP_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const { data, loading } = useSelector((state) => state.home);
    const { coord, weather, main, wind, clouds, dt, sys, timezone, name } = data;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            fetchOpenWeatherData({
                q: 'Singapore',
                units: 'metric',
                appid: WEATHER_APP_KEY
            })
        );
    }, [dispatch, WEATHER_APP_KEY]);
    return (
        <>
            <Row className='home-screen-ui'>
                <h2>Weather application</h2>
                <Col md={12} xs={6} className='search-bar mx-3 my-3'>
                    <SearchBar />
                </Col>
                {loading ? (
                    <Loader />
                ) : (
                    <Col md={12} xs={6} className='weather-widget mx-3 my-3'>
                        <WeatherCard
                            coord={coord}
                            main={main}
                            wind={wind}
                            clouds={clouds}
                            dt={dt}
                            name={name}
                            weather={weather}
                            sys={sys}
                            timezone={timezone}
                        />
                    </Col>
                )}
            </Row>
            <Row>
                <ForeCast coord={coord} appid={WEATHER_APP_KEY} />
            </Row>
            <Col md={12} xs={6} className='weather-chart mx-3 my-3'>
                <SunChart />
            </Col>
        </>
    );
};

export default HomeScreen;
