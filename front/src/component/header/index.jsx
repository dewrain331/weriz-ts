import { useNavigate, NavLink } from "react-router-dom";

import { HeaderContainer, HeaderWrapper, Nav } from "./header.style";
import { NAV_LIST } from "./constant";

const Header = () => {
  // const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Nav>
          <ul>
            {NAV_LIST.map((data) => {
              <li key={`nav-${data.id}`}>
                <NavLink
                  to={data.path}
                >
                  {data.name}
                </NavLink>
              </li>;
            })}
          </ul>
        </Nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
