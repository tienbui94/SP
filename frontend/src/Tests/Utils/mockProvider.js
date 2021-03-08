import { Provider } from 'react-redux';
import store from '../../Redux/store';

const MockProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default MockProvider;
