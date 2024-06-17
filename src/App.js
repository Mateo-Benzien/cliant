import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Make sure to import Route from react-router-dom
import Dashboard from './pages/Dashboard.jsx'; // Correct import path for Dashboard
import Search from './pages/Search.jsx';
import Favourite from './pages/Favourite.jsx';
import PodcastsDetails from './pages/PodcastDetails.jsx';
import Profile from './pages/Profile.jsx';
import DisplayPodcast from './pages/DisplayPodcast.jsx';



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
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )} 
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/search" element={<Search />} /> 
              <Route path="/favourites" element={<Favourite />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/podcast/:id" element={<PodcastsDetails />} /> 
              <Route path="/Showpodcasts/:type" element={<DisplayPodcast />} /> 
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
