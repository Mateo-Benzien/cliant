import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar.jsx'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import { Search } from '@mui/icons-material';
import PodcastsDetails from './pages/PodcastDetails.jsx';
import PodcastSearch from './pages/PodcastSearch.jsx'; //Search
import Favourite from './pages/Favourite.jsx'; // Import Favourite component
import Profile from './pages/Profile.jsx'; // Import Profile component

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
            <Routes>
              <Route path="/" exact element={<Dashboard />}/>
              <Route path="/search" exact element={<Search />}/>
              <Route path="/favourite" exact element={<Favourite/>}/>
              <Route path="/profile" exact element={<Profile />}/>
              <Route path="/podcast/:id" exact element={<PodcastsDetails />}/>
              <Route path="/showpodcasts/:type" exact element={<PodcastSearch />}/>

            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
