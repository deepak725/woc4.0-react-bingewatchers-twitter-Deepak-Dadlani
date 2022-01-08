 import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav `
  background: #000111;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //  position: fixed;
  //  width:100%;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
   justify-content: flex-start; 

   @media screen and (max-width: 768px) {
    display: flex;
    flex-direction : column;
    font-size:5px;
    align-items:center;
    justify-content : space-between;
    height : 100px;
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: left;
  justify-content : center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size:30px;
  &.active {
    color: black;
    background-color: white;
    background-size: 600px 100px;

  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction : column;
    font-size:20px;
    align-items:center;
    justify-content : center;
    margin : 2px;
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
  justify-content:flex-end;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction : column;
    font-size:5px;
    align-items:center;
    justify-content : space-between;
  }
`;

export const NavMenu2 = styled.div`
  display: flex;
  justify-content:flex-end;
  // align-items: center;
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


