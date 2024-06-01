import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store/store';
import pro from '../assets/images/pro.png';
import bronze from '../assets/images/bronze.png';
export const Mypage = () => {
  // const userId = useStore((state) => state.userId);
  const userId = 'tester';

  return (
    <Container>
      <ProfileWrapper>
        <Character src={pro} />
        <img className="bronze" src={bronze} alt="hh" />
        <H1>
          안녕하세요 <br />
          {`${userId}님`}
        </H1>
      </ProfileWrapper>
      <FieldWrapper>
        <H2>
          나만의 도파민 디톡스
          <br /> 잔디밭 확인하기
        </H2>
        <Field>
          {Array.from({ length: 111 }, (_, i) => (
            <FieldBox key={i} />
          ))}
          <FieldBox haha />
        </Field>
      </FieldWrapper>
      <StatsWrapper>
        <StatBox color={'secondary2'} time>
          <h4>
            도파민 디톡스
            <br /> 총 성공 시간
          </h4>
          <h1>0.3시간</h1>
        </StatBox>
        <StatBox color={'secondary3'}>
          <h4>
            도파민 디톡스
            <br /> 총 성공 횟수
          </h4>
          <h1>1회</h1>
        </StatBox>
      </StatsWrapper>
    </Container>
  );
};

const Container = styled.div`
  /* width: 100%; */
  /* padding: 30px 16px; */
  background-color: ${(props) => props.theme.colors.gray1};
  min-height: 100vh;
  padding: 0 16px 70px 16px;
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .bronze {
    position: absolute;
    left: 57px;
    bottom: 13px;
    width: 24px;
    height: 28px;
  }
`;

const Character = styled.img`
  width: 74px;
  height: 74px;
  /* border: 1px solid red; */
`;

const H1 = styled.p`
  margin-left: 22px;
  font: ${(props) => props.theme.fonts.h1};
  color: ${(props) => props.theme.colors.black};
`;

const FieldWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 18px 20px;
  margin: 25px 0px 18px;
  border-radius: 16px;
`;

const H2 = styled.p`
  font: ${(props) => props.theme.fonts.h2};
  color: ${(props) => props.theme.colors.black};
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 4px;
  padding-bottom: 4px; /* gap과 일관성을 유지하기 위해 하단 padding 추가 */
`;

const FieldBox = styled.div`
  background-color: ${(props) => (props.haha ? props.theme.colors.primary : props.theme.colors.gray2)};
  border-radius: 4px;
  /* aspect-ratio: 1 / 1; 정사각형을 유지하기 위해 추가 */
  width: 16px;
  height: 16px;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  padding: 18px 20px;
`;

const StatBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 154px;
  padding: 16px 18px 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.color] || props.theme.colors.gray2};
  margin-right: ${(props) => (props.time ? '10px' : '0')};
  & > h4 {
    font: ${(props) => props.theme.fonts.h4};
    color: ${(props) => props.theme.colors.gray5};
    margin: 0;
  }

  & > h1 {
    font: ${(props) => props.theme.fonts.h1};
    color: ${(props) => props.theme.colors.black};
    margin: 0;
    text-align: end;
  }
`;
