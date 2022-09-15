import React from "react";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import StyledInput from "./components/Input";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background} // only android
        />
        <Title>TODO List</Title>
        <StyledInput />
      </Container>
    </ThemeProvider>
  );
}

export default App;
