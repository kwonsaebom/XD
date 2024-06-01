import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Home } from '../assets/images/home.svg';
import { ReactComponent as Timer } from '../assets/images/timer.svg';
import { ReactComponent as Mypage } from '../assets/images/mypage.svg';
import { ReactComponent as HomeOn } from '../assets/images/home_on.svg';
import { ReactComponent as TimerOn } from '../assets/images/timer_on.svg';
import { ReactComponent as MypageOn } from '../assets/images/mypage_on.svg';

const links = [
  { to: '/', text: '홈', icon: <Home />, iconOn: <HomeOn /> },
  { to: '/timer', text: '타이머', icon: <Timer />, iconOn: <TimerOn /> },
  { to: '/mypage', text: '마이페이지', icon: <Mypage />, iconOn: <MypageOn /> },
];

export const Navbar = () => {
  return (
    <Nav>
      {links.map((link) => (
        <StyledLink key={link.to} to={link.to}>
          {({ isActive }) => (
            <>
              <div>{isActive ? link.iconOn : link.icon}</div>
              <div>{link.text}</div>
            </>
          )}
        </StyledLink>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${(props) => props.theme.colors.gray1};
  width: 100%;
  justify-content: space-around;
  padding: 10px 0;
  display: inline-flex;
  align-items: flex-start;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95.7px;
  height: 43px;
  text-decoration: none;
  div {
    color: ${(props) => props.theme.colors.gray3};
  }
  image {
    width: 24px;
    height: 24px;
  }
  &.active {
    div {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
