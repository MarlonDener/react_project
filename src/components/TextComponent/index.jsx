import P from 'prop-types';
import * as Styled from './styles';
// eslint-disable-next-line react/prop-types
export const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
TextComponent.protoTypes = {
  children: P.node.isRequired,
};
