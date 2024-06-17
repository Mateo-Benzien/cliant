import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar.jsx'; 
import { BrowserRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen &&(
          <Sidebar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
         )} 
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            Podstream
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
