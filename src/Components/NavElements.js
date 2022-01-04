 import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav `
  background: #000111;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
   justify-content: flex-start; 
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: left;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const NavLink2 = styled(Link)`
  color: #FF0000;
  display: flex;
  align-items: right;
  text-decoration: none;
  padding: 0 1rem;
  margin-right : 240px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FF0000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu2 = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  /* Second Nav */
   margin-right: 2400px; 
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


