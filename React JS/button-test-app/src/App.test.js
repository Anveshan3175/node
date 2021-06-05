import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('It renders without crashing',() => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
  ReactDOM.unmountComponentAtNode(div);
})