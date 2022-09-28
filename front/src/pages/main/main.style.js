import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  width: 80%;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;

export { MainContainer, Contents };
