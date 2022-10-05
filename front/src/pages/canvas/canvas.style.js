import styled from "styled-components";

const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

const CanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Drawer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  border: 1px solid silver;
  background-size: 10px, 30px, 10px 10px, 30px 30px;
  background-image: linear-gradient(90deg, #00000004 1px, transparent 1px),
    linear-gradient(90deg, #00000004 1px, transparent 1px),
    linear-gradient(#00000004 1px, transparent 1px),
    linear-gradient(#00000004 1px, transparent 1px);
`;

const PushRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
  PushRight,
};
