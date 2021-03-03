import './App.css';
import routes from './Routes/routes';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
function App() {
    return (
        <>
            <main>
                <Container fluid>
                    {routes.map((route, index) => (
                        <Route exact key={index} path={route.path} component={route.component} />
                    ))}
                </Container>
            </main>
        </>
    );
}

export default App;
