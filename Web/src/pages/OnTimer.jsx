import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const OnTimer = () => {
  const navigate = useNavigate();
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [selected, setSelected] = useState(null);

  const handleNextClick = () => {
    navigate('/oncheck');
  };

  const handlePreClick = () => {
    navigate('/onboard');
  };

  const isNextDisabled = !hours || !minutes;

  const handleHourChange = (e) => {
    const newHours = e.target.value;
    setHours(newHours);
  };

  const handleMinuteChange = (e) => {
    const newMinutes = e.target.value;
    setMinutes(newMinutes);
  };

  const handleSelect = (num) => {
    let newHours = parseInt(hours) + num;
    let newMinutes = parseInt(minutes);

    if (newHours >= 24) {
      newHours = newHours % 24;
    }

    if (newMinutes + num * 60 >= 60) {
      newHours += 1;
      newMinutes = (newMinutes + num * 60) % 60;
    } else {
      newMinutes += num * 60;
    }

    newHours = newHours < 10 ? '0' + newHours : newHours;
    newMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes;

    setHours(newHours.toString());
    setMinutes(newMinutes.toString());
    setSelected(num); // 해당 버튼을 선택한 것으로 설정
  };

  return (
    <Container>
      <Order>3/5</Order>
      <LineContainer>
        <Line />
        <GrayLine />
      </LineContainer>
      <Title>
        도파민 디톡스 시간을 <br />
        직접 설정해보세요!
      </Title>
      <BoxContainer>
        <TimeInput type="number" placeholder="00" value={hours} onChange={handleHourChange} />
        :
        <TimeInput type="number" placeholder="00" value={minutes} onChange={handleMinuteChange} />
      </BoxContainer>
      <ButtonContainer>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SelectTime key={num} onClick={() => handleSelect(num)} isClicked={selected === num}>
            {num}시간
          </SelectTime>
        ))}
      </ButtonContainer>
      <Spacer />
      <BottomContainer>
        <Add>디톡스 타이머 시간은 매일 다시 설정할 수 있어요</Add>
        <NavigationButtons>
          <Pre onClick={handlePreClick}>이전</Pre>
          <Next onClick={handleNextClick} disabled={isNextDisabled}>
            다음
          </Next>
        </NavigationButtons>
      </BottomContainer>
    </Container>
  );
};

export default OnTimer;

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
  width: 60%;
`;

const GrayLine = styled(Line)`
  background-color: ${(props) => props.theme.colors.gray1};
  width: 40%;
`;

const Title = styled.div`
  font: ${(props) => props.theme.fonts.h1};
  padding-top: 30px;
  margin-bottom: 40px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  width: 343px;
  height: 110px;
  color: ${(props) => props.theme.colors.gray4};
  background-color: ${(props) => props.theme.colors.gray1};
`;

const TimeInput = styled.input`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray4};
  font-size: 40px;
  text-align: center;
  margin: 0 10px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
`;

const SelectTime = styled.button`
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.colors.secondary1 : theme.colors.gray1)};
  color: ${({ isClicked, theme }) => (isClicked ? 'white' : theme.colors.secondary1)};
  border: none;
  border-radius: 17px;
  padding: 10px 30px;
  font: ${(props) => props.theme.fonts.button2};
  cursor: pointer;
  width: 100px;

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
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

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
