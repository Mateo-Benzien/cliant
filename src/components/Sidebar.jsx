import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import LogoImage from "../Images/Logo.png";

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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px; /* Removed extra space */
  margin: 16px 0px;
`;

const Image = styled.img`
  height: 40px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
`;

const Sidebar = () => {
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
      <Elements>
        <HomeRounded />
        <NavText>Dashboard</NavText>
      </Elements>
    </MenuContainer>
  );
};

export default Sidebar;
