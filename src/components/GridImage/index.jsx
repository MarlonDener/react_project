import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
export const GridImage = (children) => {
  return (
    <Styled.GlobalContainer id="gallery">
      <SectionContainer>
        <Styled.Container>
          <Heading uppercase>
            <strong>{children.title}</strong>
          </Heading>
          <TextComponent>{children.description}</TextComponent>
          <Styled.Grid>
            {children.grid.map((el) => (
              <Styled.GridElement key={el.altText}>
                <Styled.Image src={el.srcImg} alt={el.altText} />
              </Styled.GridElement>
            ))}
          </Styled.Grid>
        </Styled.Container>
      </SectionContainer>
    </Styled.GlobalContainer>
  );
};
GridImage.protoTypes = {
  children: P.node.isRequired,
};
