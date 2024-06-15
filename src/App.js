import {useState} from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js'
const Container = styled.div`
background: ${({theme}) => theme.bg};
width: 100%;
height: 100vh;
`;

function App() {
  //Hooks
  const [darkMode,setDarkMode] =useState(true)
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>Podstream</Container>
    </ThemeProvider>
  
)
  ;
}

export default App;
