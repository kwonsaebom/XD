import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const OnShortForm = () => {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(5);
  const [selected, setSelected] = useState(null);

  const handleNextClick = () => {
    navigate('/ontimer');
  };

  const handlePreClick = () => {
    navigate('/onboard');
  };

  const handleIncrease = () => {
    setCnt(cnt + 1);
  };

  const handleDecrease = () => {
    if (cnt > 1) setCnt(cnt - 1);
  };

  const handleSelect = (num) => {
    setCnt(num);
    setSelected(num);
  };

  return (
    <Container>
      <Order>2/5</Order>
      <LineContainer>
        <Line />
        <GrayLine />
      </LineContainer>
      <Title>
        하루동안 시청하실 숏폼의 수를 <br />
        직접 제한해보세요!
      </Title>
      <BoxContainer>
        <Button onClick={handleDecrease}>-</Button>
        <Count>{cnt}</Count>
        <Button onClick={handleIncrease}>+</Button>
      </BoxContainer>
      <ButtonContainer>
        <SelectCount onClick={() => handleSelect(5)} isClicked={selected === 5}>
          5개
        </SelectCount>
        <SelectCount onClick={() => handleSelect(10)} isClicked={selected === 10}>
          10개
        </SelectCount>
        <SelectCount onClick={() => handleSelect(20)} isClicked={selected === 20}>
          20개
        </SelectCount>
        <SelectCount onClick={() => handleSelect(30)} isClicked={selected === 30}>
          30개
        </SelectCount>
        <SelectCount onClick={() => handleSelect(50)} isClicked={selected === 50}>
          50개
        </SelectCount>
      </ButtonContainer>
      <Spacer />
      <BottomContainer>
        <Add>숏폼 제한개수는 매일 다시 설정할 수 있어요</Add>
        <NavigationButtons>
          <Pre onClick={handlePreClick}>이전</Pre>
          <Next onClick={handleNextClick}>다음</Next>
        </NavigationButtons>
      </BottomContainer>
    </Container>
  );
};

export default OnShortForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Order = styled.div`
  margin-right: 10px;
`;

const LineContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 40%;
`;

const GrayLine = styled(Line)`
  background-color: ${(props) => props.theme.colors.gray1};
  width: 60%;
`;

const Title = styled.div`
  font: ${(props) => props.theme.fonts.h1};
  padding-top: 30px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 81px;
  height: 130px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray3};
  background-color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  width: 161px;
  height: 130px;
  border-radius: 8px;
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.gray1};
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SelectCount = styled.button`
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.colors.secondary1 : theme.colors.gray1)};
  color: ${({ isClicked, theme }) => (isClicked ? 'white' : theme.colors.secondary1)};
  border: none;
  border-radius: 17px;
  padding: 10px 15px;
  margin-right: 10px;
  font: ${(props) => props.theme.fonts.button2};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1};
    color: white;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.secondary1};
  }
`;

const Add = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.gray4};
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

const Pre = styled.button`
  width: 48%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.gray4};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font: ${(props) => props.theme.fonts.button1_a};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const Next = styled.button`
  width: 48%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font: ${(props) => props.theme.fonts.button1_a};
  color: ${(props) => props.theme.colors.secondary1};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BottomContainer = styled.div`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
