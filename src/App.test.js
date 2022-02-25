import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('clicking the button switches language to english', () => {
  render(<App />);

  const link = screen.getByText('English');
  fireEvent.click(link);

  expect(
    screen.getByText('Delhi smog: How many cigarettes did you smoke this week?')
  ).toBeInTheDocument();
});

test('clicking the button switches language to hindi', () => {
  const dom = render(<App />);

  const link = dom.container.querySelector('#hi');
  fireEvent.click(link);

  expect(
    screen.getByText('भारत: इस हफ़्ते आपने आपने कितनी सिगरेट पी हैं?')
  ).toBeInTheDocument();
});

test('simulates city selection', () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  //The value should be the key of the option
  fireEvent.change(getByTestId('select-city'), { target: { value: 1 } });
  let options = getAllByTestId('select-city-1');
  expect(options[0].value).toBe('283 PM2.5#12');
});
