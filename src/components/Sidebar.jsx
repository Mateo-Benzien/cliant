import React from "react";
import styled from "styled-components";
import { 
  HomeRounded, 
  CloseRounded, 
  SearchRounded, 
  FavoriteRounded, 
  UploadRounded, 
  LightModeRounded, 
  LogoutRounded 
} from "@mui/icons-material";
import LogoImage from "../images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
`;

const Image = styled.img`
  height: 40px;
`;

const Close = styled.div`
  margin-left: 10px;
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none !important;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none !important;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

const Sidebar = ({ setMenuOpen, setDarkMode, darkMode}) => {
  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favorites",
      icon: <FavoriteRounded />,
    },
  ];
  
  const buttons = [
    {
      fun: () => console.log("Upload"),
      name: "Upload",
      icon: <UploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: "Light Mode",
      icon: <LightModeRounded />,
    },
    {
      fun: () => console.log("Log Out"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];
  
  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          Podstream
        </Logo>
        <Close>
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item) => (
        <Link key={item.link} to={item.link} style={{ textDecoration: "none" }}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
      <HR />
      {buttons.map((item) => (
        <Elements onClick={ item.fun}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
