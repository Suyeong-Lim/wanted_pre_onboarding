import { MenuListData } from "./data/MenuListData";
import React from "react";
import styled from "styled-components";
import menuStyle from "../styles/menuStyle.css";

const MenuList = () => {
  return (
    <MenuListWrapper>
      <div className="ResponsiveMenu">
        <a className="MenuALink Home">홈</a>
        <a className="MenuALink">채용</a>
        <a className="MenuALink">이벤트</a>
      </div>

      {MenuListData.map((menu) => (
        <MenuALink key={menu.id}>{menu.name}</MenuALink>
      ))}
    </MenuListWrapper>
  );
};

const MenuListWrapper = styled.li`
  height: 14px;
  width: auto;
  margin-right: 10px;
`;

const MenuALink = styled.a`
  position: relative;
  vertical-align: middle;
  padding: 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  @media ${(props) => props.theme.tabletM} {
    display: none;
    text-align: left;
    padding: 11px 10px 19px;
  }
`;

export default MenuList;
