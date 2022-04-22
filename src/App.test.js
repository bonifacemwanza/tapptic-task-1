import React from 'react'
import { render,waitFor ,cleanup, screen,fireEvent } from '@testing-library/react';
import App from './App';



function hasInputValue(e, inputValue) {
  return screen.getByDisplayValue(inputValue) === e
}



test('empty form validation', () => {
  render(<App />);
  const usernameError = screen.getByTestId('username_test');
  const passwordError = screen.getByTestId('password_test');
  const messageError  = screen.getByTestId('message_test')
  fireEvent.click(screen.getByText(/Send/i));
  expect(usernameError).toHaveTextContent(/Username * Cant be Empty/);
  expect(passwordError).toHaveTextContent(/Password * Cant be Empty/);
  expect(messageError).toHaveTextContent(/Message * Cant be Empty/);
});


test('filed in form submission',async () => {
  render(<App />);
  const usernameInput = screen.getByTestId("username");
  const passwordInput = screen.getByTestId("password");
  const messageInput  = screen.getByTestId("message");


  fireEvent.change(usernameInput, { target: { value: 'test_username' } })
  fireEvent.change(passwordInput, { target: { value: '123test' } })
  fireEvent.change(messageInput, { target: { value: 'hello there' } })

  expect(hasInputValue(usernameInput, "test_username")).toBe(true)
  expect(hasInputValue(passwordInput, "123test")).toBe(true)
  expect(hasInputValue(messageInput, "hello there")).toBe(true)
  const submitForm = await fireEvent.click(screen.getByText(/Send/i));
  setTimeout(()=> {
     waitFor(() => expect(screen.getByTestId("response_message")).toHaveTextContent(/Message Sent!/));
  }, 4000);
  
});
afterEach(cleanup);

