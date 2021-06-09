import P from 'prop-types';
import * as Styled from './styles';
// eslint-disable-next-line react/prop-types
export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
MenuLink.protoTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool.isRequired,
};
