import Icon from "./Icon";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
const NaviWrapper = styled.div`
  border: 1px solid grey;
  .highLight{
    color:red;
    .icon {
      fill:red;
    }
  }
  >ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    > a {
      > li {
        width: 80px;
        height: 80px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 25px;
          height: 25px;
          display: inline-block;
          margin-top: 18px;
          fill:none;
        }
      }
    }
  }
`

const Navi = () =>{
    let activeClassName = "highLight";
    return(
        <NaviWrapper>
            <ul>
                <NavLink to="/home"
                         className = {({ isActive }) =>
                             isActive ? activeClassName : undefined }>
                        <li><Icon name="home"></Icon>主页</li>
                </NavLink>
                <NavLink to="/count"
                         className = {({ isActive }) =>
                             isActive ? activeClassName : undefined }>
                    <li><Icon name="count"></Icon>记一笔</li>
                </NavLink>
                <NavLink to="/statistics"
                         className = {({ isActive }) =>
                             isActive ? activeClassName : undefined }>
                    <li><Icon name="analysis"></Icon>统计</li>
                </NavLink>
            </ul>
        </NaviWrapper>
    );
}

export  default  Navi;