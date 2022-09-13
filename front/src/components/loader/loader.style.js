import styled from "styled-components";

const LoaderBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
`;

const LoaderText = styled.div`
  text-align: center;
`;

export { LoaderBackground, LoaderText };
