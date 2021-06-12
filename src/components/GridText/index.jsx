import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const GridText = (children) => {
  return (
    <Styled.GlobalContainer id={children.sectionId}>
      <SectionContainer>
        <Styled.Container>
          <Heading>
            <strong>{children.title}</strong>
            _____________________
          </Heading>
          <TextComponent>{children.description}</TextComponent>
          <Styled.Grid>
            {children.grid.map((el) => (
              <Styled.GridElement key={el.title}>
                <Heading size="medium">{el.title}</Heading>
                <TextComponent>{el.description}</TextComponent>
              </Styled.GridElement>
            ))}
          </Styled.Grid>
        </Styled.Container>
      </SectionContainer>
    </Styled.GlobalContainer>
  );
};
GridText.protoTypes = {
  children: P.string,
};
