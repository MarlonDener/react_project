import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { Form } from '.';
describe('<Form />', () => {
  it('Shold render form', () => {
    renderTheme(<Form>Children</Form>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
