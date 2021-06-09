import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';

describe('<GridTwoColumn />', () => {
  it('Shold render with two column grid', () => {
    renderTheme(<GridTwoColumn />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
