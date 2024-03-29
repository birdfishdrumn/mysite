import styled, { css } from "styled-components"

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `
  }
}

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 44px;
  /* height: ${props => (props.fullWidth ? "" : "")}; */
  line-height: 44px;
  box-shadow: none;

  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  background: ${props => (props.caution ? "black" : "white")};

  color: ${props => (props.caution ? "white" : "black")};
  border: 1px solid black;
  white-space: nowrap;
  ${fullWidthStyles}
  transition:0.5s;
  &:hover:not(:disabled) {
    color: ${props => (props.caution ? "black" : "white")};
    background: ${props => (props.caution ? "white" : "black")};
    border: 1px solid rgba(0, 0, 0, 0);
  }

  &:disabled {
    border-color: #999;
    cursor: pointer;
    color: #999;
  }
`
