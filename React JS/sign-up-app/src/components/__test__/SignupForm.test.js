import {render,screen,cleanup} from '@testing-library/react';

import SignupForm from '../SignupPageForm';

afterEach(() => {
    cleanup();
});


test('This is test',() => {
    expect(true).toBe(true);
});

test('Test if SignupForm is rendered',() => {
    render(<SignupForm />);
    const signupFormElement = screen.getByTestId('signupForm');
    const usernameElement = screen.getByTestId('username');
    const passwordElement = screen.getByTestId('password');
    const confirmpasswordElement = screen.getByTestId('confirmpassword');
    const submitElement = screen.getByTestId('submit');

    // Test of form and its elements are rendered or not
    expect(signupFormElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(confirmpasswordElement).toBeInTheDocument();
    expect(submitElement).toBeInTheDocument();

});