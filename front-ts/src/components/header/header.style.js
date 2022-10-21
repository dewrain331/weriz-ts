/* eslint-disable */

import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 6%);
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  flex: 5;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;

    li {
      text-align: center;
      margin-right: 4rem;

      a {
        font-size: ${({ theme }) => theme.fontSizes.base};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
        white-space: nowrap;
      }
    }
  }
`;

const LoginSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export { HeaderContainer, HeaderWrapper, Nav, LoginSection, Logo };
