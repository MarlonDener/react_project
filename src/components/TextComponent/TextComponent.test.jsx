import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
describe('<TextComponent />', () => {
  it('Shold render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
