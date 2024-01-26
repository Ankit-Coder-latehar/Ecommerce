import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';//react-rdeux
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
