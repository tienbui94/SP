//import 3rd and jest, chai, enzyme
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import chai from 'chai';

//import store redux
// import store from '../Redux/store';

//import function
import mathRound from '../Utils/mathRound';
import objectToParams from '../Utils/objectToParams';
import { fetchOpenWeatherData, fetchOWForeCast } from '../Reducers/homeReducer';

//import component, screen
import WeatherCard from '../Components/WeatherCard';
import SearchBar from '../Components/SearchBar';
import ForeCast from '../Components/ForeCast';
import Loader from '../Components/Loader';
import SunChart from '../Components/SunChart';
import Celsius from '../Components/Celsius';

//mock provider
import MockProvider from './Utils/mockProvider';

//adapter for enzyme to work with react 17 version.
Enzyme.configure({ adapter: new Adapter() });

//api key from .env
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//mock data
const mockDataAPI = {
    appid: WEATHER_API_KEY,
    units: 'metric',
    lat: 1.2897,
    lon: 103.8501
};

// get state data from store
// const state = store.getState();

// console.log(state, 'store');

//implement chai expect for unit test
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
    const mockMain = {
        foo: 'foo',
        bar: 'bar'
    };

    const mockWind = {
        fooWind: 'fooWind',
        barWind: 'barWind'
    };
    const wrapper = mount(
        <WeatherCard
            coord='coord'
            main={mockMain}
            wind={mockWind}
            dt='dt'
            weather='mock weather'
            name='weather-card'
        />
    );

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.weather-card')).to.have.lengthOf(2);
    });

    it('check props of component', () => {
        chaiExpect(wrapper.props().coord).to.equal('coord');
        chaiExpect(wrapper.props().main).to.equal(mockMain);
        chaiExpect(wrapper.props().wind).to.equal(mockWind);
        chaiExpect(wrapper.props().dt).to.equal('dt');
        chaiExpect(wrapper.props().weather).to.equal('mock weather');
        chaiExpect(wrapper.props().name).to.equal('weather-card');
    });
});

describe('Celsius Component', () => {
    const wrapper = shallow(<Celsius />);

    const mountWrapper = mount(<Celsius />);

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.celsius')).to.have.lengthOf(1);
        chaiExpect(mountWrapper.find('.celsius').props().id).to.equal('temperature-celsius');
        chaiExpect(mountWrapper.find('.celsius').props().children).to.be.lengthOf(1);
    });
});

describe('ForeCast Component', () => {
    const mountWrapper = mount(
        <MockProvider>
            <ForeCast coord='example coord' appid='example appid' />
        </MockProvider>
    );

    it('check attributes of component', () => {
        chaiExpect(mountWrapper.find('.forecast-list-item')).to.have.lengthOf(1);
        chaiExpect(mountWrapper.find('.forecast-list-item').props().children).to.equal(false);
    });

    it('check props of component', () => {
        chaiExpect(mountWrapper.props().children.props.coord).to.equal('example coord');
        chaiExpect(mountWrapper.props().children.props.appid).to.equal('example appid');
    });
});

describe('SearchBar Component', () => {
    const mountWrapper = mount(
        <MockProvider>
            <SearchBar />
        </MockProvider>
    );

    it('test button element in searchBar component', () => {
        chaiExpect(mountWrapper.find('button').props()).to.haveOwnProperty('onClick');
        chaiExpect(mountWrapper.find('button').props().children).to.equal('Get Weather');
        chaiExpect(mountWrapper.find('button').props().type).to.equal('button');
    });

    it('test input element in searchBar component', () => {
        chaiExpect(mountWrapper.find('input').props()).to.haveOwnProperty('type');
        chaiExpect(mountWrapper.find('input').props()).to.haveOwnProperty('onChange');
        chaiExpect(mountWrapper.find('input').props()).to.haveOwnProperty('onKeyDown');
        chaiExpect(mountWrapper.find('input').props().type).to.equal('text');
    });
});

describe('SunChart Component', () => {
    const wrapper = shallow(
        <MockProvider>
            <SunChart />
        </MockProvider>
    );

    it('check children of component', () => {
        expect(wrapper.props().children).toBeTruthy();
    });
});

describe('Loader Component', () => {
    const wrapper = shallow(<Loader />);

    it('check attributes of component', () => {
        chaiExpect(wrapper.find('.loader-spinner').hasClass('className')).to.equal(false);
    });
});