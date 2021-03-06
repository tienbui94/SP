import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherCard from '../Components/WeatherCard';
import { fetchOpenWeatherData } from '../Reducers/homeReducer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import SunChart from '../Components/SunChart';
import ForeCast from '../Components/ForeCast';
import Chart from '../Components/Chart';
import AutoSuggestSearch from '../Components/AutoSuggestSearch';
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
                <Col md={12} xs={12} className='home-screen-header'>
                    <h2>Weather application</h2>
                </Col>
                <Col md={12} xs={12} className='search-bar mx-3 my-3'>
                    <AutoSuggestSearch />
                </Col>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Col md={12} xs={12} className='weather-widget mx-3 my-3'>
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

                        <ForeCast coord={coord} appid={WEATHER_APP_KEY} />

                        <Col md={12} xs={12} className='weather-chart mx-3 my-3'>
                            <SunChart />
                        </Col>

                        <Container className='recharts'>
                            <Chart />
                        </Container>
                    </>
                )}
            </Row>
        </>
    );
};

export default HomeScreen;
