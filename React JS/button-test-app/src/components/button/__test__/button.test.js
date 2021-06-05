import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../button/button';
import { render } from '@testing-library/react';


it("It renders without crashing",() => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div);
})

it('renders button correctly',() => {
    const {getByTestId}  = render(<Button label = "Click me please"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Click me please");

})


it('renders button correctly',() => {
    const {getByTestId}  = render(<Button label = "Save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("Save");

})