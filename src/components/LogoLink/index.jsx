import P from 'prop-types';
import * as Styled from './styles';
export const LogoLink = ({ srcImg, altText }) => {
  if (srcImg == undefined) {
    srcImg =
      'https://raw.githubusercontent.com/luizomf/curso-reactjs-nextjs-project-3/master/public/assets/images/logo.svg';
  }
  return (
    <Styled.Container aria-label="imagem">
      <img src={srcImg} alt={altText} />
    </Styled.Container>
  );
};

LogoLink.propTypes = {
  srcImg: P.string,
  altText: P.string,
};
