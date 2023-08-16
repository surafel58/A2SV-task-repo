import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../app/store";
import App from '../App';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom matchers




beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
})

describe('Test task app', () => {

  test('renders Taskify heading', () => {
 
    const headingElement = screen.getByText(/Taskify/i);
    expect(headingElement).toBeInTheDocument();
  });
  

  test('add task', () => {

    const inputTextArea = screen.getByTestId('input_text_area');
    const addBtn = screen.getByTestId('add_btn');
  
    fireEvent.change(inputTextArea, { target: { value: 'New Task' } });
    fireEvent.click(addBtn);
  
    const taskItem = screen.getByText(/New Task/i);
    expect(taskItem).toBeInTheDocument();
  
  });
  

  test('tests marking as complete', () => {

    const taskItem = screen.getByText(/New Task/i);
    const completeBtn = screen.getByTestId(`tick-icon-${taskItem.textContent}`);
    fireEvent.click(completeBtn);
  
    expect(taskItem).toHaveClass('line-through');
  });

})
