import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Icon = styled.Image`
  tint-color: ${({ theme }) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({ children, onPressOut }) => {
  return <TouchableOpacity onPress={onPressOut}>{children}</TouchableOpacity>;
};

IconButton.propTypes = {
  // type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
};

export default IconButton;
