import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";

const StyledInput = styled.TextInput`
  width: 100%;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px
  color: ${({ theme }) => theme.text}
`;

function Input() {
  return <StyledInput />;
}

export default Input;
