import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Category from '../components/Category';

const OnCategory = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/OnShortForm');
  };

  return (
    <Container>
        <Order>1/5</Order>
        <Line />
        <Title>지금 핫한 숏폼 카테고리를 선택해보세요! </Title>
        <SubTitle>(최대 5개)</SubTitle>
      <CategoryContainer>
        <Category /><Category /><Category /><Category /><Category />
      </CategoryContainer>
      <Add>관심 카테고리는 매일 다시 선택할 수 있어요</Add>
      <Next onClick={handleNextClick}>다음</Next>
    </Container>
  );
};

export default OnCategory;

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

const CategoryContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
    padding-top: 30px;
    padding-left: 20px;
    font-size: 40px;
    font-weight: bold;
`;

const SubTitle = styled.div`
    font-size: 35px;
`;

const Add = styled.div`

`;

const Next = styled.button`
  width: 300px;
  height: 50px;
  background-color: lightgray;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
