import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loader = () => {
    return (
        <Spinner animation='border' role='status'>
            <span className='sr-only text-center'>Loading...</span>
        </Spinner>
    );
};

export default Loader;
