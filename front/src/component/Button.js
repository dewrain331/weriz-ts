import styled, { css } from "styled-components";
import { darken } from "polished";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: all 0.2s ease-in-out;

  height: 2.25rem;
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${(props) => {
    const propColor = props.theme.colors[props.color];
    return css`
      background: none;
      color: ${propColor};
      border: 1px solid ${propColor};
      &:hover {
        background: ${propColor};
        color: ${props.theme.colors.white};
      }
      &:active {
        background: ${darken(0.1, propColor)};
      }
    `;
  }}

  & + & {
    margin-left: 1rem;
  }

  &:disabled {
    background: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.white};
    border: none;
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
