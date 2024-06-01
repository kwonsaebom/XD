import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Xbutton } from '../assets/images/Xbutton.svg';
import Xcy from '../assets/images/xcy_cry.png';

export const StopModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <Xbuttons onClick={onClose} width="24" height="24" />
        <div className="cele">정말 포기하실 건가요?</div>
        <div className="desc">조금만 더 힘내보세요</div>
        <img src={Xcy} alt="grade" />
        <div className="buttons">
          <MoveButton1 onClick={onClose}>돌아가기</MoveButton1>
          <MoveButton2>포기하기</MoveButton2>
        </div>
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
  height: 358px;
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
    width: 150px;
    height: 150px;
  }
  .buttons {
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
`;

const Xbuttons = styled(Xbutton)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const MoveButton1 = styled.button`
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  width: 136px;
  padding: 12px 10px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font: ${(props) => props.theme.fonts.button1_a};
  color: ${(props) => props.theme.colors.secondary1};
  cursor: pointer;
`;
const MoveButton2 = styled.button`
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.gray4};
  display: flex;
  width: 136px;
  margin-left: 11px;
  padding: 12px 10px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font: ${(props) => props.theme.fonts.button1_a};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
