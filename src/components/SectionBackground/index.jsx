import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>
        <div>
          <h1>SectionBackground</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            doloribus debitis minima nam beatae alias eius, mollitia asperiores
            animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
            quaerat aspernatur expedita!
          </p>
        </div>
      </SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
