import { render, screen } from '@testing-library/react';
import App from '../App';
import mathRound from '../Utils/mathRound';
import objectToParams from '../Utils/objectToParams';
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

describe('utils function', () => {
    test('mathRound function', () => {
        expect(mathRound(30.45)).tobeCall(1);
        expect(mathRound(30.45)).toEqual(30);
    });

    test('objectToParams function', () => {
        expect(objectToParams({ foo: 'bar' })).tobeCall(1);
        expect(objectToParams({ foo: 'bar' })).toEqual('?foo=bar');
    });
});
