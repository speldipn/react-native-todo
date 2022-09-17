import React from "react";
import { Dimensions } from "react-native";
// import { useWindowDimensions } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import PropTypes from "prop-types";

// width: ${({ width }) => width - 40};
const StyledInput = styled.TextInput.attrs(({ theme }) => {
  //  not working
})` 
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0px;
  padding: 15px 20px;
  border-radius: 10px
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px
  color: ${({ theme }) => theme.text}
`;

function Input({ placeholder, value, onChagneText, onSubmitEditing }) {
  const width = Dimensions.get("window").width;
  // const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder="Input text"
      placeholderTextColor="#ffffff"
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      maxLength={10}
      keyboardAppearance="dark" // only iphone
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChagneText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
