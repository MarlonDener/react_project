import P from 'prop-types';
import { LogoLink } from '../LogoLink';
import { SectionContainer } from '../SectionContainer';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
// eslint-disable-next-line react/prop-types
export const Menu = (children) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openOrClose = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu">
      <>
        <Styled.Button
          aria-label="menu"
          menuVisible={menuVisible}
          onClick={openOrClose}
        >
          {menuVisible ? (
            <CloseIcon aria-label="Close menu" />
          ) : (
            <MenuIcon aria-label="Open menu" />
          )}
        </Styled.Button>
        <Styled.Container
          arial-label="container-menu"
          menuVisible={menuVisible}
          onClick={() => setMenuVisible(false)}
        >
          <SectionContainer>
            <Styled.MenuContainer>
              <Styled.display>
                <LogoLink srcImg={children.srcImg} alt={children.text} />
              </Styled.display>
              <Styled.display>
                <NavLinks links={children.links} />
              </Styled.display>
            </Styled.MenuContainer>
          </SectionContainer>
        </Styled.Container>
      </>
    </div>
  );
};

Menu.propTypes = {
  children: P.node,
};
