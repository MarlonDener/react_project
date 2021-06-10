import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';
describe('<GoTop />', () => {
  it('Shold render a go to top button', () => {
    const { container } = renderTheme(<GoTop>Children</GoTop>);
    expect(
      screen.getByRole('link', { name: 'Subir ao topo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Subir ao topo' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background: #DDDDDD;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: fixed;
        width: 4rem;
        height: 4rem;
        bottom: 2rem;
        right: 2rem;
        opacity: 0.6;
        z-index: 6;
        color: #000926;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <div>
        <a
          aria-label="Subir ao topo"
          class="c0"
          href="#"
          title="Subir ao topo"
        >
          <svg
            aria-hidden="true"
            class="c1"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h24v24H0V0z"
              fill="none"
            />
            <path
              d="M7 14l5-5 5 5H7z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
