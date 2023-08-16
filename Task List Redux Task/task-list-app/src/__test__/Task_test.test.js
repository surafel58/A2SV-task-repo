import {fireEvent, render, screen} from '@testing-library/react'
import App from '../App';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('Test task app', () => {

  beforeEach(() => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
    //test adding task
    test('adds task successfully', async () => {
        // const component = render(
        //     <Provider store={store}>
        //       <App />
        //     </Provider>
        //   );

      const input_text_area = screen.findByTestId('input_text_area');
      const add_btn = await screen.findByTestId('add_btn');
      userEvent.type(input_text_area, "finish today's task");
      fireEvent.click(add_btn);
      
      const single_task = await screen.findAllByTestId('single_task');
      expect(single_task).toHaveLength(3); 
    });

      //test completing task
      test('complete task successfully', async () => {


      const input_text_area = screen.findByTestId('input_text_area');
      const add_btn = await screen.findByTestId('add_btn');
      userEvent.type(input_text_area, "finish today's task");
      fireEvent.click(add_btn);
      
      const single_task = await screen.findAllByTestId('single_task');
      expect(single_task[0]).toHaveLength(3); 
    });
});


