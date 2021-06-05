import { renderTheme } from '../../styles/render-theme';
import Home from './index';
describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
