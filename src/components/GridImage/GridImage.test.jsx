import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
describe('<GridImage />', () => {
  it('Shold render images grid', () => {
    renderTheme(<GridImage>Children</GridImage>);
    expect(
      screen.getByRole('heading', { name: 'Gallery' }),
    ).toBeInTheDocument();
  });
});
