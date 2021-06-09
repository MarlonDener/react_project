import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
describe('<GridContent />', () => {
  it('Shold render grid content', () => {
    renderTheme(<GridContent>Children</GridContent>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
