/* eslint-disable react/prop-types */
import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';
import contents from './Asset';

export const GridTwoColumn = ({ title, text, imgSrc, id, sectionId }) => {
  return (
    <Styled.Container id={sectionId}>
      <Styled.TextContainer>
        <Heading uppercase>
          <strong>{title}</strong>
        </Heading>
        <TextComponent>{text}</TextComponent>
      </Styled.TextContainer>
      <Styled.ImageContainer>
        <img src={imgSrc} alt={contents.title} />
      </Styled.ImageContainer>
    </Styled.Container>
  );
};
GridTwoColumn.propTypes = {
  title: P.string,
  text: P.string,
  imgSrc: P.string,
};
