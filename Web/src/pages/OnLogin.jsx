import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const OnLogin = () => {
  const navigate = useNavigate();
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [username, setUsername] = useState('');

  const handlePreClick = () => {
    navigate('/');
  };

  const handleNextClick = () => {
    navigate('/home');
  };

  const handleCheckUsername = () => {
    setIsUsernameAvailable(true);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <Order>5/5</Order>
      <LineContainer>
        <Line />
        <GrayLine />
      </LineContainer>
      <Title>
        3초만에 로그인하고 <br />
        나만의 도파민 관리 시작하기
      </Title>
      <LoginContainer>
        <InputContainer>
          <Label>아이디</Label>
          <CustomInput
            type="text"
            placeholder="아이디를 입력해 주세요"
            value={username}
            onChange={handleChangeUsername}
          />
          <CheckButton onClick={handleCheckUsername}>인증 완료</CheckButton>
          {!isUsernameAvailable && <ErrorText>이미 사용 중인 아이디입니다.</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력해 주세요" />
        </InputContainer>
        <InputContainer>
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="비밀번호를 한번 더 입력해 주세요" />
        </InputContainer>
      </LoginContainer>
      <Spacer />
      <BottomContainer>
        <NavigationButtons>
          <Pre onClick={handlePreClick}>이전</Pre>
          <Next onClick={handleNextClick}>시작하기</Next>
        </NavigationButtons>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
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
  width: 100%;
`;

const GrayLine = styled(Line)`
  background-color: ${(props) => props.theme.colors.gray1};
  width: 0%;
`;

const Title = styled.div`
  font: ${(props) => props.theme.fonts.h1};
  padding-top: 40px;
  margin-bottom: 30px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  font: ${(props) => props.theme.fonts.h2};
  width: 100px;
  text-align: left;
`;

const CustomInput = styled.input`
  width: 257px;
  height: 44px;
  border-radius: 5px;
  margin-right: 5px;
  padding: 0 10px;
  border: none;
  font: ${(props) => props.theme.fonts.h4};
  background-color: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray3};
`;

const Input = styled.input`
  width: 343px;
  height: 44px;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray3};
  font: ${(props) => props.theme.fonts.h4};
`;

const CheckButton = styled.button`
  height: 40px;
  width: 82px;
  border: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: #e5fdee;
  color: ${(props) => props.theme.colors.primary};
  font: ${(props) => props.theme.fonts.h2};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const ErrorText = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 14px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
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
  margin-bottom: 20px;
`;

const BottomContainer = styled.div`
  padding-top: auto;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;
