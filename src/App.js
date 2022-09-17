import React, { useState } from "react";
import { StatusBar, Alert, TouchableOpacity } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import StyledInput from "./components/Input";
import IconButton from "./components/IconButton";
import { images } from "./Images";

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
  const [title, setTitle] = useState("");
  const onSubmitEditing = (text) => {
    Alert.alert(text);
  };
  const [check, setCheck] = useState(false);
  console.log(images);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background} // only android
        />
        <Title>TODO List</Title>
        <StyledInput
          placeholder="Add a Task"
          value={title}
          onChagneText={setTitle}
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity
          onPress={() => {
            setCheck(!check);
          }}
        >
          {check ? <images.completed /> : <images.uncompleted />}
        </TouchableOpacity>
        <TouchableOpacity>
          <images.delete />
        </TouchableOpacity>
        <TouchableOpacity>
          <images.update />
        </TouchableOpacity>
      </Container>
    </ThemeProvider>
  );
}

export default App;
