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

const Nav = styled.nav`
  flex: 4;
  display: flex;
  align-items: center;

  ul {
    display: flex;

    li {
      text-align: center;

      a {
        font-size: ${({ theme }) => theme.fontSizes.small};
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
  align-items: center;
`;

export { HeaderContainer, HeaderWrapper, Nav, LoginSection };
