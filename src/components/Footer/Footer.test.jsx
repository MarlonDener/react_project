import { screen } from '@testing-library/dom';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';
describe('<Footer />', () => {
  it('Shold render', () => {
    const { container } = renderTheme(
      <Footer>
        <h1>Teste</h1>
      </Footer>,
    );
    expect(
      screen.getByRole('link', { name: 'Feito com ❤ por Marlon Dener' }),
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 1.6rem;
        padding: 10px 30px;
        width: 100%;
        color: #DDDDDD;
      }

      .c0 {
        background: #000926;
        margin: 0;
        text-align: center;
        border-top: thin solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c0 a:hover {
        color: #ccc;
      }

      @media (max-width:800px) {
        .c1 {
          padding: 10px 10px;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <p>
              <a
                href="https://marlondener.github.io/page/"
              >
                Feito com
          ❤ por Marlon Dener
              </a>
            </p>
          </div>
        </footer>
      </div>
    `);
  });
});
