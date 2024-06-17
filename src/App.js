import {useState} from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js'
import Sidebar from './components/Sidebar'; // Correct import path
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
display: flex;
background: ${({theme}) => theme.bg};
width: 100%;
height: 100vh;
overflow-x: hidden;
overflow-y: hidden;
`;

function App() {
  //Hooks
  const [darkMode, setDarkMode] =useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
      <Container>
        <Sidebar /> 
        Podstream
        </Container>
        </BrowserRouter>
    </ThemeProvider>
  
)
  ;
}

export default App;
