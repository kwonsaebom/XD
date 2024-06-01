import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const OnShortForm = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/nextPage'); // 페이지 경로를 실제 경로로 변경하세요.
  };

  const handlePreClick = () => {
    navigate('/previousPage'); // 페이지 경로를 실제 경로로 변경하세요.
  };

  return (
    <Container>
        <Bar>
            <Order>2/5</Order>
            <Line />
        </Bar>
        <Paragraph>하루동안 시청하실 숏푤의 수를 직접 제한해보세요 !</Paragraph>
        <ButtonContainer>
            <Count>0</Count> {/* 초기 카운트를 설정하세요 */}
        </ButtonContainer>
        <PageContainer>
            <Pre onClick={handlePreClick}>이전</Pre>
            <Next onClick={handleNextClick}>다음</Next>
        </PageContainer>
    </Container>
  )
}

export default OnShortForm;

// Styled Components

const Container = styled.div`
  padding: 20px;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
`;

const Order = styled.div`
  margin-right: 10px;
`;

const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: black;
`;

const Paragraph = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Pre = styled.button`
  width: 100px;
  height: 50px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const Next = styled.button`
  width: 100px;
  height: 50px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
