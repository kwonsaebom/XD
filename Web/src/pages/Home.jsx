import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../assets/images/close24.png';
import happy_XCY from '../assets/images/cha1.png';
import YouTubePlayer from '../components/YouTubePlayer';

const maxProgress = 50;
let currentProgress = 0;

export const Home = () => {
  const [youtubeshort, setYoutubeshort] = useState(false); //false로 설정하면 home, true로 하면 숏폼이 뜹니당~

  const gotoshortform = () => {
    setYoutubeshort(true);
  };

  const gotohome = () => {
    setYoutubeshort(false);
  };

  return (
    <HomeContainer>
      {!youtubeshort ? <FirstPage gotoshortform={gotoshortform} /> : <Youtubeshort gotohome={gotohome} />}
    </HomeContainer>
  );
};

const FirstPage = ({ gotoshortform }) => {
  return (
    <HomeContainer>
      <Text1>
        오늘 시청 가능한 <br />
        잔여 숏폼 개수 {maxProgress}개
      </Text1>
      <Goal>
        <span>{currentProgress}</span>/{maxProgress}
      </Goal>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${Math.max((currentProgress / maxProgress) * 100, 3)}%` }} />
      </ProgressBarContainer>
      <Box>
        <Text2>
          오늘도 최소한의 도파민만
          <br />
          충전해 보아요 !
        </Text2>
        <Img1 src={happy_XCY} alt="happy_XCY"></Img1>
        <Button1 onClick={gotoshortform}>도파민 충전하러 가기</Button1>
      </Box>
    </HomeContainer>
  );
};

const Youtubeshort = ({ gotohome }) => {
  return (
    <HomeContainer>
      <Top>
        <Goal2>
          <span>{currentProgress}</span>/{maxProgress}
          <Img2 src={close} alt="Close" onClick={gotohome}></Img2>
        </Goal2>
      </Top>
      <ProgressBarContainer2>
        <ProgressBar style={{ width: `${Math.max((currentProgress / maxProgress) * 100, 1)}%` }} />
      </ProgressBarContainer2>
      <YouTubePlayer></YouTubePlayer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin: 0;
  padding: 0;
  max-height: 812px;
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Text1 = styled.div`
  margin-left: 16px;
  margin-top: 74px;
  color: var(--Gray-black, #000);
  align-self: flex-start;
  font: ${(props) => props.theme.fonts.h1};
`;

const Goal = styled.div`
  margin-left: 16px;
  margin-top: 10px;
  align-self: flex-start;
  font: ${(props) => props.theme.fonts.h3};

  span {
    font: ${(props) => props.theme.fonts.h2};
  }
`;

const ProgressBarContainer = styled.div`
  margin: 6px 16px 32px 16px;
  width: 343px;
  height: 10px;
  background-color: #eff1f4;
  border-radius: 5px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #00ee5b;
  border-radius: 5px;
`;

const Box = styled.div`
  width: 343px;
  height: 495px;
  background-color: #e5fdee;
  border-radius: 16px;
`;

const Text2 = styled.div`
  margin: 18px 0 0 20px;
  font: ${(props) => props.theme.fonts.h1};
`;

const Img1 = styled.img`
  margin-top: 76px;
  margin-left: 48px;
  width: 247px;
  height: 186px;
`;

const Button1 = styled.div`
  border-radius: 8px;
  background: var(--primary-primary, #00ee5b);
  display: flex;
  width: 303px;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font: ${(props) => props.theme.fonts.button1_a};
  margin-top: 86px;
  margin-left: 10px;
`;

const Top = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Goal2 = styled.div`
  display: flex;
  align-items: center;
  margin: 13px 0 0 16px;
  font: ${(props) => props.theme.fonts.h4};
  color: #7f828c;

  span {
    font: ${(props) => props.theme.fonts.h3};
    color: #010101;
  }
`;

const Img2 = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 291px;
  z-index: 5;
`;

const ProgressBarContainer2 = styled.div`
  width: 100%;
  height: 2px;
  color: #eff1f4;
  border-radius: 5px;
`;
