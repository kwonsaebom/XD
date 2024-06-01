import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import ProgressProvider from '../components/ProgressProvider';
import { TimerSuccess } from '../components/TimerSuccess';
import { StopModal } from '../components/StopModal';
import xcy_concentraiton from '../assets/images/xcy_concentrait.png';
import xcy_lowstress from '../assets/images/xcy_lowstress.png';
import xcy_strong from '../assets/images/xcy_strong.png';

const characters = [
  {
    src: xcy_concentraiton,
    name: '집중력 향상',
  },
  {
    src: xcy_lowstress,
    name: '스트레스 감소',
  },
  {
    src: xcy_strong,
    name: '통제력 강화',
  },
];

export const TimeCounter = () => {
  const formdone = false;
  const [time, setTime] = useState(new Date('2024-06-02 09:00:00') - new Date());
  const [fulltime] = useState(new Date('2024-06-02 09:00:00') - new Date('2024-06-01 10:00:00'));
  const [times, setTimes] = useState([0, 0, 0]);
  const [completeModal, setCompleteModal] = useState(false);
  const [stopModal, setStopModal] = useState(false);
  const endHour = (time) => Math.floor(time / 1000 / 60 / 60);
  const endMin = (time) => Math.floor((time / 1000 / 60) % 60);
  const endSec = (time) => Math.floor((time / 1000) % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1000);
    }, 1000);
    setTimes([endHour(time), endMin(time), endSec(time)]);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    console.log(completeModal);
  }, [completeModal]);

  const SetCompleteModalfalse = () => {
    setCompleteModal(false);
  };

  const SetStopModalfalse = () => {
    setStopModal(false);
  };
  return (
    <div>
      <Title>
        도파민 디톡스 성공까지
        <br /> {times[0] === 0 || `${times[0]}시간`} {times[1]}분 남았습니다
      </Title>
      <Box progress>
        <ProgressBar>
          <ProgressProvider valueStart={0} valueEnd={100}>
            {() => (
              <CircularProgressbar
                value={(time / fulltime) * 100}
                strokeWidth={5}
                styles={{
                  path: {
                    stroke: '#00EE5B',
                    height: '100%',
                    strokeLinecap: 'round',
                    transition: 'stroke-dashoffset 1s linear 0s',
                  },
                  trail: {
                    stroke: 'white',
                  },
                }}
              />
            )}
          </ProgressProvider>
          <TextinBar>
            <p>지속시간</p>
            <div>{`${String(times[0]).padStart(2, '0')}:${String(times[1]).padStart(2, '0')}:${String(
              times[2]
            ).padStart(2, '0')}`}</div>
          </TextinBar>
        </ProgressBar>
        {formdone ? (
          <StopButton onClick={() => setStopModal(true)}>중도포기하기</StopButton>
        ) : (
          <StopButton start>바로 시작하기</StopButton>
        )}
      </Box>
      <Box>
        <Character>
          {characters.map((character) => {
            return (
              <div>
                <img src={character.src} alt={character.name} />
                <p>{character.name}</p>
              </div>
            );
          })}
        </Character>
      </Box>
      {completeModal && <TimerSuccess onClose={SetCompleteModalfalse} />}
      {stopModal && <StopModal onClose={SetStopModalfalse} />}
      <button onClick={() => setCompleteModal(true)}>모달 열기</button>
    </div>
  );
};

const Title = styled.div`
  padding-top: 30px;
  font: ${(props) => props.theme.fonts.h1};
  color: ${(props) => props.theme.colors.Black};
`;

const ProgressBar = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
`;

const TextinBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p {
    font: ${(props) => props.theme.fonts.h2};
    color: ${(props) => props.theme.colors.gray4};
    margin: 0;
  }
  div {
    font: ${(props) => props.theme.fonts.h1};
    color: ${(props) => props.theme.colors.Black};
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${(props) => (props.progress ? '398px' : '139px')};
  padding: ${(props) => (props.progress ? '0' : '26px')};
  margin-top: 14px;
  background: white;
  border-radius: 16px;
`;

const StopButton = styled.button`
  width: 117px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  background: ${(props) => props.theme.colors.gray1};
  border-radius: 17px;
  font: ${(props) => (props.start ? props.theme.colors.primary : props.theme.colors.gray3)};
  color: ${(props) => (props.start ? props.theme.colors.primary : props.theme.colors.gray3)};
  border: none;
  cursor: pointer;
`;

const Character = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 19px;
    img {
      width: 77px;
      height: 58px;
      border-radius: 50%;
      margin-bottom: 6px;
    }
    p {
      font: ${(props) => props.theme.fonts.b2};
      color: ${(props) => props.theme.colors.gray5};
      margin: 0;
    }
  }
`;
