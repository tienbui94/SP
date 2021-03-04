import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import store from '../../Redux/store';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
const MockProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default MockProvider;
