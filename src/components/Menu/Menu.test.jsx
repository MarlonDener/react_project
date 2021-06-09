import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
describe('<Menu />', () => {
  it('Shold render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu />);
    const button = screen.getByLabelText('menu');
    expect(button).toHaveStyleRule('display', 'none');
  });
});
