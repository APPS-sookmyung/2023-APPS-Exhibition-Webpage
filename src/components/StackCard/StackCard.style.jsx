import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Colors } from '../../theme';

const OriginalRollingStack = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  50.01% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const CloneRollingStack = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
`;

export const Container = styled.div`
  display: flex;
  /* width: calc(130px * 9); */
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

export const ImgContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  margin: 12px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 90px;
  height: 90px;
  /* 위 | 오른쪽 | 아래 | 왼쪽 */
  margin: 15px 15px 0px 0px;
  border-radius: 10px;
  background: linear-gradient(90deg, ${Colors.purple} 0%, #120523 90%, #180038 100%);
  position: relative;
  overflow: hidden;
`;

export const CardContainerOriginalStack = styled.div`
  display: flex;
  margin: 0px;
  width: auto;

  animation: ${OriginalRollingStack} 40s linear infinite;
`;

export const CardContainerCloneStack = styled.div`
  display: flex;
  margin: 0px;
  width: auto;

  animation: ${CloneRollingStack} 40s linear infinite;
`;
