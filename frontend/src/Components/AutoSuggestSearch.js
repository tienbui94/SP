import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_INFO } from '../graphql/countryql';
import AutoSuggest from 'react-autosuggest';
import { useDispatch } from 'react-redux';
import { fetchOpenWeatherData } from '../Reducers/homeReducer';
import { Container, Col } from 'react-bootstrap';
const AutoSuggestSearch = () => {
    const dispatch = useDispatch();
    const WEATHER_APP_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const { data, loading, error } = useQuery(GET_COUNTRY_INFO);
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        if (data) {
            setCountries(data);
        }
    }, [data]);

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0
            ? []
            : countries.Country.filter(
                  (country) => country.name.toLowerCase().slice(0, inputLength) === inputValue
              );
    };

    const onSuggestionSelected = (event, { suggestionValue }) => {
        dispatch(
            fetchOpenWeatherData({ q: suggestionValue, units: 'metric', appid: WEATHER_APP_KEY })
        );
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        return setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        return setSuggestions([]);
    };

    const getSuggestionValue = (suggestions) => suggestions.name;

    const renderSuggestion = (suggestions) => {
        return (
            <Container className='select-suggest'>
                <Col xs={12} md={12} className='flag'>
                    <img
                        alt='country-flag'
                        style={{ width: 45, height: 35 }}
                        src={suggestions?.flag?.svgFile}></img>
                </Col>
                {suggestions.name}
            </Container>
        );
    };

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const inputProps = {
        placeholder: 'Enter Country/Name',
        style: { boxShadow: '1px 1px 1px 1px lightgray', width: 400, height: 40 },
        value,
        onChange: onChange
    };

    return (
        <>
            {error && <div>Error Search Bar!</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='App'>
                    <AutoSuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        onSuggestionSelected={onSuggestionSelected}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
            )}
        </>
    );
};

export default AutoSuggestSearch;
