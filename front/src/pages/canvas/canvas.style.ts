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
  padding-bottom: 1rem;
`;

const CanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DrawerProps {
  width: string;
  height: string;
}

const Drawer = styled.div<DrawerProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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

interface TheFigureProps {
  width: string;
  height: string;
  figure: string;
}

const TheFigure = styled.div<TheFigureProps>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${(props) => props.color};
  border-radius: ${(props) => (props.figure === "Circle" ? "50%" : "0%")};

  &:hover {
    background: ${(props) => props.color};
  }
`;

export {
  CanvasContainer,
  Contents,
  ButtonWrapper,
  CanvasWrapper,
  Drawer,
  PushRight,
  TheFigure,
};
