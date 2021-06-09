import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';
describe('<SectionBackground />', () => {
  it('Shold render', () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
