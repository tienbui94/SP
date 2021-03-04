import './App.css';
import React, { Suspense } from 'react';
import routes from './Routes/routes';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
function App() {
    return (
        <>
            <main>
                <Suspense fallback={<div className='loading-page'>loading...</div>}>
                    <Switch>
                        <Container fluid>
                            {routes.map((route, index) => (
                                <Route
                                    exact
                                    key={index}
                                    path={route.path}
                                    component={route.component}
                                />
                            ))}
                        </Container>
                    </Switch>
                </Suspense>
            </main>
        </>
    );
}

export default App;
