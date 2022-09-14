import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  HeaderContainer,
  HeaderWrapper,
  Nav,
  LoginSection,
  Logo,
} from "./header.style";
import { NAV_LIST } from "./constant";
import Button from "../button";
import AuthModal from "../auth";

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <Logo>This is Logo.</Logo>
          <Nav>
            <ul>
              {NAV_LIST.map((data) => (
                <li key={`nav-${data.id}`}>
                  <NavLink to={`${data.path}`}>{data.name}</NavLink>
                </li>
              ))}
            </ul>
          </Nav>
          <LoginSection>
            <Button onClick={() => setShowAuthModal(true)}>Login</Button>
          </LoginSection>
        </HeaderWrapper>
      </HeaderContainer>

      {showAuthModal && (
        <AuthModal show={showAuthModal} setShow={setShowAuthModal} />
      )}
    </>
  );
};

export default Header;
