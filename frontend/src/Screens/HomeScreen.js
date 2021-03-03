import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import SearchBar from '../Components/SearchBar';
import WeatherCard from '../Components/WeatherCard';
import { fetchOpenWeatherData } from '../Reducers/homeReducer';
import { useDispatch, useSelector } from 'react-redux';
const HomeScreen = () => {
    const WEATHER_APP_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(WEATHER_APP_KEY, ' key');
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
            <Row>
                <SearchBar />
                <WeatherCard />
            </Row>
        </>
    );
};

export default HomeScreen;
