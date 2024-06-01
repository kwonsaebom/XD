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
      <LineContainer>
        <Line />
        <GrayLine />
      </LineContainer>
      <Title>
        지금 핫한 숏폼 카테고리를 <br />
        선택해보세요!
      </Title>
      <SubTitle>(최대 5개)</SubTitle>
      <CategoryContainer>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </CategoryContainer>
      <Add>관심 카테고리는 매일 다시 선택할 수 있어요</Add>
      <Next onClick={handleNextClick}>다음</Next>
    </Container>
  );
};

export default OnCategory;

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const LineContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 20%;
`;

const GrayLine = styled(Line)`
  background-color: ${(props) => props.theme.colors.gray1};
  width: 80%;
`;

const Order = styled.div`
  margin-right: 10px;
`;

const CategoryContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  padding-top: 30px;
  font-size: 40px;
  font-weight: bold;
  font: ${(props) => props.theme.fonts.h1};
  margin-bottom: 40px;
`;

const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.gray5};
  font: ${(props) => props.theme.fonts.h1};
`;

const Add = styled.div`
  margin-top: 380px;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.gray4};
`;

const Next = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.gray1};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
