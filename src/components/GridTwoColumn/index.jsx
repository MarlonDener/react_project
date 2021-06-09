import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';
import contents from './Asset';

export const GridTwoColumn = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Heading uppercase>
          <h3 name="titulo">{contents.title}</h3>
        </Heading>
        <TextComponent>{contents.text}</TextComponent>
      </Styled.TextContainer>
      <Styled.ImageContainer>
        <img src={contents.imagem} alt={contents.title} />
      </Styled.ImageContainer>
    </Styled.Container>
  );
};

//<img src={contents.imagem} alt={contents.title} />
