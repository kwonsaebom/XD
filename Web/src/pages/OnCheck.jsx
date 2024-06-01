import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const OnCheck = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/OnLogin');
  };

  const handlePreClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Order>4/5</Order>
      <LineContainer>
        <Line />
        <GrayLine />
      </LineContainer>
      <Title>
        이제 거의 다왔어요! <br />
        틀린 부분이 있는지 확인해보세요.
      </Title>
      <BoxContainer>
        <Box>
          <CheckTitle>
            오늘 제한적으로 <br />
            시청 가능한 숏폼의 수
          </CheckTitle>
          <CheckCount>10개</CheckCount>
        </Box>
        <Box>
          <CheckTitle>
            오늘 진행할 <br />
            도파민 디톡스 시간
          </CheckTitle>
          <CheckCount>3시간 30분</CheckCount>
        </Box>
        <Box>
          <CheckTitle>
            오늘 시청해 볼 <br />
            관심 카테고리의 종류
          </CheckTitle>
          <CheckCount>3가지</CheckCount>
        </Box>
      </BoxContainer>
      <Add>한 번 입력한 설정값은 내일까지 바꿀 수 없어요</Add>
      <NavigationButtons>
        <Pre onClick={handlePreClick}>이전</Pre>
        <Next onClick={handleNextClick}>다음</Next>
      </NavigationButtons>
    </Container>
  );
};

export default OnCheck;

const Container = styled.div`
  width: 100%;
  padding: 20px;
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
  width: 80%;
`;

const GrayLine = styled(Line)`
  background-color: ${(props) => props.theme.colors.gray1};
  width: 20%;
`;

const Title = styled.div`
  font: ${(props) => props.theme.fonts.h1};
  padding-top: 30px;
  margin-bottom: 40px;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
`;

const Box = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex; /* 가로 정렬 추가 */
  justify-content: space-between; /* 왼쪽, 오른쪽 정렬 추가 */
  align-items: center;
  border-radius: 8px;
  width: 343px;
  height: 90px;
  color: ${(props) => props.theme.colors.gray5};
  background-color: ${(props) => props.theme.colors.gray1};
  margin-bottom: 10px; /* 박스 사이에 아래쪽 마진 추가 */
`;
const CheckTitle = styled.div`
  font-size: 16px;
`;

const CheckCount = styled.div`
  font-size: 20px;
  color: black;
`;

const Add = styled.div`
  margin-top: 120px;
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
