import { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchOpenWeatherData } from '../Reducers/homeReducer';
const SearchBar = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const WEATHER_APP_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const onSearch = () => {
        dispatch(fetchOpenWeatherData({ q: city, units: 'metric', appid: WEATHER_APP_KEY }));
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSearch();
        }
    };
    return (
        <>
            <FormControl
                value={city}
                onChange={(event) => setCity(event.target.value)}
                type='text'
                placeholder='Select Location'
                className='mr-sm-2'
                onKeyDown={onKeyDown}
            />
            <Button onClick={onSearch} variant='light' className='btn btn-primary'>
                Get Weather
            </Button>
        </>
    );
};

export default SearchBar;
