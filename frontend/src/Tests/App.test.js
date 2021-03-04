import mathRound from '../Utils/mathRound';
import objectToParams from '../Utils/objectToParams';
import { fetchOpenWeatherData, fetchOWForeCast } from '../Reducers/homeReducer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WeatherCard from '../Components/WeatherCard';
import chai from 'chai';

// import HomeScreen from '../Screens/HomeScreen';
// import SearchBar from '../Components/SearchBar';
import ForeCast from '../Components/ForeCast';
import Loader from '../Components/Loader';
import SunChart from '../Components/SunChart';
import Celsius from '../Components/Celsius';
// import App from '../App';
import MockProvider from './Utils/mockProvider';

Enzyme.configure({ adapter: new Adapter() });
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const mockDataAPI = {
    appid: WEATHER_API_KEY,
    units: 'metric',
    lat: 1.2897,
    lon: 103.8501
};

const chaiExpect = chai.expect;

describe('utils function', () => {
    it('mathRound function', () => {
        expect(mathRound(30.45)).toBeTruthy();
        expect(mathRound(30.45)).toEqual(30);
    });

    it('objectToParams function', () => {
        expect(objectToParams({ foo: 'bar' })).toBeTruthy();
        expect(objectToParams({ foo: 'bar' })).toEqual('?foo=bar');
    });
});

describe('test await/async api call', () => {
    it('call api get weather data', async () => {
        expect.assertions(1);
        const api = await fetchOWForeCast({ mockDataAPI });
        expect(api).toBeTruthy();
    });

    it('call api get forecast data', async () => {
        expect.assertions(1);
        const api = await fetchOpenWeatherData(mockDataAPI);
        expect(api).toBeTruthy();
    });
});

describe('WeatherCard Component', () => {
    const wrapper = shallow(<WeatherCard />);

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.weather-card').hasClass('border')).to.equal(false);
        chaiExpect(wrapper.find('.weather-card')).to.have.lengthOf(1);
    });
});

describe('Celsius Component', () => {
    const wrapper = shallow(<Celsius />);

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.celsius').hasClass('id')).to.equal(false);
        chaiExpect(wrapper.find('.celsius')).to.have.lengthOf(1);
    });
});

describe('ForeCast Component', () => {
    const wrapper = shallow(
        <MockProvider>
            <ForeCast />
        </MockProvider>
    );

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.forecast-list-item')).to.have.lengthOf(0);
    });
});

describe('SearchBar Component', () => {
    // const wrapper = shallow(
    //     <MockProvider>
    //         <SearchBar />
    //     </MockProvider>
    // );

    it('check attributes of component', () => {
        // chaiExpect(wrapper.find('.get-weather-btn').hasClass('disabled')).to.equal(true);
    });
});

describe('SunChart Component', () => {
    const wrapper = shallow(
        <MockProvider>
            <SunChart />
        </MockProvider>
    );

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.sun-rise-charts'));
    });
});

describe('Loader Component', () => {
    const wrapper = shallow(<Loader />);

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.loader-spinner').hasClass('className')).to.equal(false);
    });
});
