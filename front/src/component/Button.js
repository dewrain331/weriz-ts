import styled, { css } from "styled-components";

const Button = styled.button`
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
`;
