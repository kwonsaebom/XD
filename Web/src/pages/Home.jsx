import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../assets/images/close24.png';
import happy_XCY from '../assets/images/cha1.png';
import bye_XCY from '../assets/images/cha4.png';
import byebye_XCY from '../assets/images/cha3.png';
import YouTubePlayer from '../components/YouTubePlayer';
import { Navigate } from 'react-router';

const maxProgress = 50;
const currentProgress = 0;

export const Home = () => {
  const [youtubeshort, setYoutubeshort] = useState(false); //false로 설정하면 home, true로 하면 숏폼이 뜹니당~

  const gotoshortform = () => {
    setYoutubeshort(true);
  };

  const gotohome = () => {
    setYoutubeshort(false);
  };

  return (
    <>
      {!youtubeshort ? (
        <HomeContainer>
          <FirstPage gotoshortform={gotoshortform} />
        </HomeContainer>
      ) : (
        <HomeContainer2>
          <Youtubeshort gotohome={gotohome} />
        </HomeContainer2>
      )}
    </>
  );
};

const FirstPage = ({ gotoshortform }) => {
  if (currentProgress === maxProgress) {
    return <FirstPage1 />;
  } else {
    return (
      <HomeContainer>
        <Text1>
          오늘 시청 가능한 <br />
          잔여 숏폼 개수 {maxProgress - currentProgress}개
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
  }
};

const FirstPage1 = () => {
  const gototimer = () => {
    return <Navigate to="/timer" />;
  };
  return (
    <HomeContainer>
      <Text1>
        오늘 시청 가능한 <br />
        잔여 숏폼 개수 {maxProgress - currentProgress}개
      </Text1>
      <Goal>
        <span>{currentProgress}</span>/{maxProgress}
      </Goal>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${Math.max((currentProgress / maxProgress) * 100, 3)}%` }} />
      </ProgressBarContainer>
      <Box>
        <Text4>
          오늘은 이미 충분한 도파민을 <br />
          충전하셨네요. 내일 또 봐요!
          <br />
          충전해 보아요 !
        </Text4>
        <Img4 src={byebye_XCY} alt="byebye_XCY"></Img4>
        <Button1 onClick={gototimer}>타이머 확인하러 가기</Button1>
      </Box>
    </HomeContainer>
  );
};

const Youtubeshort = ({ gotohome }) => {
  if (currentProgress === maxProgress) {
    return <Youtubeshort2 currentProgress={currentProgress} gotohome={gotohome} />;
  } else {
    return (
      <HomeContainer2>
        <Top>
          <Goal2>
            <span>{currentProgress}</span>/{maxProgress}
          </Goal2>
          <Img2 src={close} alt="Close" onClick={gotohome}></Img2>
        </Top>
        <ProgressBarContainer2>
          <ProgressBar style={{ width: `${Math.max((currentProgress / maxProgress) * 100, 1)}%` }} />
        </ProgressBarContainer2>
        <YouTubePlayer></YouTubePlayer>
      </HomeContainer2>
    );
  }
};

const Youtubeshort2 = ({ gotohome }) => {
  const gototimer = () => {
    return <Navigate to="/timer" />;
  };
  return (
    <HomeContainer2>
      <Top>
        <Goal2>
          <div>
            <span>{currentProgress}</span>/{maxProgress}
          </div>
        </Goal2>
        <Img2 src={close} alt="Close" onClick={gotohome}></Img2>
      </Top>
      <ProgressBarContainer2>
        <ProgressBar style={{ width: `${Math.max((currentProgress / maxProgress) * 100, 1)}%` }} />
      </ProgressBarContainer2>
      <Text3>
        벌써 {currentProgress}개의 숏폼을 모두 시청하셨어요
        <br />
        이제 도파민 디톡스를 시작해 보아요
      </Text3>
      <Img3 src={bye_XCY} alt="bye_XCY"></Img3>
      <Button1 onClick={gototimer}>타이머 확인하러 가기</Button1>
    </HomeContainer2>
  );
};

const HomeContainer = styled.div`
  margin: 0;
  padding: 0 16px;
  max-height: 812px;
  /* width: 100%; */
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
  width: 100%;
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
  width: 100%;
  margin: 0 16px 0 16px;
  height: 495px;
  background-color: #e5fdee;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text2 = styled.div`
  align-self: flex-start;
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

const HomeContainer2 = styled.div`
  padding: 0;
  margin: 0;
  max-height: 812px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  height: 48px;
  background-color: #fff;
`;

const Goal2 = styled.div`
  display: flex;
  align-items: center;
  /* margin: 13px 0 0 16px; */
  font: ${(props) => props.theme.fonts.h4};
  color: #7f828c;

  span {
    font: ${(props) => props.theme.fonts.h3};
    color: #010101;
  }
`;

const Img2 = styled.img`
  /* position: fixed; */
  right: 16px;
  width: 24px;
  height: 24px;
  z-index: 5;
  margin-right: 16px;
`;

const ProgressBarContainer2 = styled.div`
  width: 100%;
  height: 2px;
  color: #eff1f4;
  border-radius: 5px;
`;

const Text3 = styled.div`
  margin: 117px 33px 0 33px;
  font: ${(props) => props.theme.fonts.h1};
`;

const Img3 = styled.img`
  margin-top: 60px;
  width: 303px;
  height: 253px;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 22px 0 0 22px;
  font: ${(props) => props.theme.fonts.h1};
`;

const Img4 = styled.img`
  margin-top: 77px;
  width: 247px;
  height: 185px;
`;
