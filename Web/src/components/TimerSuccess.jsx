import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Xbutton } from '../assets/images/Xbutton.svg';
import { useNavigate } from 'react-router';
export const TimerSuccess = ({ onClose }) => {
  const navigate = useNavigate();
  const handleMove = () => {
    navigate('/mypage');
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <Xbuttons onClick={onClose} width="24" height="24" />
        <div className="cele">축하드립니다!</div>
        <div className="desc">도파민 디톡스를 성공하셨습니다</div>
        <img src="https://via.placeholder.com/150" alt="grade" />
        <div className="desc2">브론즈 등급을 부여받았습니다</div>
        <MoveButton onClick={handleMove}>잔디밭 확인하러 가기</MoveButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 315px;
  height: 282px;
  .cele {
    padding-top: 28px;
    font: ${(props) => props.theme.fonts.h1};
  }
  .desc {
    font: ${(props) => props.theme.fonts.h2};
    color: ${(props) => props.theme.colors.gray5};
    margin-top: 16px;
    margin: 0;
  }
  img {
    margin-top: 21px;
    width: 68px;
    height: 68px;
    border-radius: 50%;
  }
  .desc2 {
    margin-top: 22px;
    font: ${(props) => props.theme.fonts.h4};
    color: ${(props) => props.theme.colors.gray5};
  }
`;

const Xbuttons = styled(Xbutton)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const MoveButton = styled.button`
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  width: 283px;
  padding: 12px 10px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font: ${(props) => props.theme.fonts.button1_a};
  color: ${(props) => props.theme.colors.secondary1};
  cursor: pointer;
`;
