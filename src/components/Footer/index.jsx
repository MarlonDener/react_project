import P from 'prop-types';
import * as Styled from './styles';
import mock from './mock';
import { TextComponent } from '../TextComponent';
export const Footer = () => {
  return (
    <Styled.Container>
      <TextComponent>{mock.text_html}</TextComponent>
    </Styled.Container>
  );
};
Footer.protoTypes = {
  children: P.node.isRequired,
};
