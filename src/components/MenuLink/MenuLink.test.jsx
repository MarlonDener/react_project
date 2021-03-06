import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';
describe('<MenuLink />', () => {
  it('Shold render a link', () => {
    renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });

  it('Shold render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' }))
      .toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #000926;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://localhost"
      >
        Children
      </a>
    `);
  });
});
