import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledList } from "./styled";


const StyledNav = styled.nav`
  width: ${p => p.isExpaned ? 260 : 70}px;
  height: 100%;
  backgrond-color: #fff;
  padding: 10px;
`;

const StyledA = styled(Link)`
  display: flex;
  align-items: center;
`;

export default function Nav({isExpaned}) {
  const menuList = [
    {
      url: "pages/dashboard",
      label: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      url: "pages/userlist",
      label: "회원관리",
      icon: <PeopleAltIcon />,
    },
    {
      url: "pages/boardlist",
      label: "게시판관리",
      icon: <ListIcon />,
    },
    {
      url: "pages/schedule",
      label: "스케줄관리",
      icon: <CalendarMonthIcon />,
    },
    {
      url: "pages/setting",
      label: "환경설정",
      icon: <SettingsIcon />,
    },
  ];
  const subMenuList = [
    "회원리스트",
    "탈퇴회원리스트",
    "게시판리스트",
    "게시물관리",
  ];

  return (
    <StyledNav isExpaned={isExpaned}>
      {menuList.map((menu) => (
        <StyledList key={menu}>
          <StyledA to={menu.url}>
            {menu.icon}
            {isExpaned && menu.label}
          </StyledA>
        </StyledList>
      ))}
    </StyledNav>
  );
}
