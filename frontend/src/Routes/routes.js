import { lazy } from 'react';

const HomeScreenLazy = lazy(() => import('../Screens/HomeScreen'));
const routes = [
    {
        path: '/',
        component: HomeScreenLazy
    }
];

export default routes;
