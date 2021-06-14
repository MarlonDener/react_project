import P from 'prop-types';
import * as Styled from './styles';
export const Form = () => {
  return (
    <Styled.Container>
        <h1>Contato</h1>
           <Styled.LineContainer>
              <Styled.input type="text" placeholder="Nome:"/>
              <Styled.input type="email" placeholder="Email:" />
            </Styled.LineContainer>
              <Styled.Textarea placeholder="Mensagem:"></Styled.Textarea>
              <Styled.button>Enviar</Styled.button>
    </Styled.Container>
  );
};
Form.protoTypes = {
  children: P.node.isRequired,
};
