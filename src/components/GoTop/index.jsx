import P from 'prop-types';
import * as Styled from './styles';
import { ArrowDropUp } from '@styled-icons/material-outlined/ArrowDropUp';
export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Subir ao topo" title="Subir ao topo">
      <ArrowDropUp />
    </Styled.Container>
  );
};
GoTop.protoTypes = {
  children: P.node.isRequired,
};
