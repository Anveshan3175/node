import {render,screen,cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';


afterEach(() => {
    cleanup();
});
test('should render non-completed Todo',() =>{
    const todo = {id: 1, title: 'wash dishes', completed: false};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('1');
    expect(todoElement).toBeInTheDocument;
    expect(todoElement).toHaveTextContent('wash dishes');
    expect(todoElement).not.toContainHTML('strike');
})


test('should render completed Todo',() =>{
    const todo = {id: 2, title: 'wash car', completed: true};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('2');
    expect(todoElement).toBeInTheDocument;
    expect(todoElement).toHaveTextContent('wash car');
    expect(todoElement).toContainHTML('strike');
    expect(todoElement.innerHTML.includes('<strike>')).toBeTruthy()
})


test('matches snapshot',() => {
    const todo = {id: 1, title: 'wash dishes', completed: false};
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})