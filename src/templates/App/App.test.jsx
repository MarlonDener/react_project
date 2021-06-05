import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import Home from './index';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'blue',
  });
});
