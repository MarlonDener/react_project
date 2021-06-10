import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
describe('<GridText />', () => {
  it('Shold render', () => {
    renderTheme(<GridText>Children</GridText>);
    expect(
      screen.getByRole('heading', { name: 'My grid _____________________' }),
    ).toBeInTheDocument();
  });
});
