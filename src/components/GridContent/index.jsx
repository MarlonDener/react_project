import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import mock from './mock.js';
import { TextComponent } from '../TextComponent';

export const GridContent = (children) => {
  return (
    <Styled.Container id={children.sectionId}>
      <h1>{children.title}</h1>
      <Styled.Html>
        <TextComponent>{children.html}</TextComponent>
      </Styled.Html>
    </Styled.Container>
  );
};
GridContent.protoTypes = {
  children: P.node.isRequired,
};
