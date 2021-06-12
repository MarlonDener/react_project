import P from 'prop-types';
import * as Styled from './styles';
export const PageNotFound = () => {
  return (
    <Styled.Container>
      <Styled.Main>
        <h1>PÁGINA NÃO ENCONTRADA</h1>
        <Styled.TextComponentNotFound>
          <p>
            A página que você busca não foi encontrada.
            <a href="/"> Clique aqui para voltar</a>
          </p>
        </Styled.TextComponentNotFound>
      </Styled.Main>
    </Styled.Container>
  );
};
PageNotFound.protoTypes = {
  children: P.node.isRequired,
};
