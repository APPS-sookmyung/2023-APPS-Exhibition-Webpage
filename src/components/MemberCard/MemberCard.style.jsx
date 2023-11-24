import styled from '@emotion/styled';
import { Colors } from '../../theme';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  /* width: calc(210px * 24); */
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const OriginalRolling = keyframes`
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

const CloneRolling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
`;

export const CardContainerOriginal1 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${OriginalRolling} 47s linear infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerClone1 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${CloneRolling} 47s linear infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerOriginal2 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${OriginalRolling} 47s linear reverse infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerClone2 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${CloneRolling} 47s linear reverse infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 180px;
  height: fit-content;
  /* 위 | 오른쪽 | 아래 | 왼쪽 */
  margin: 20px 20px 0px 0px;
  border-radius: 15px;
  background: linear-gradient(90deg, #351068 0%, #120523 90%, #180038 100%);
  position: relative;
  /* overflow: hidden; */

  transition: width 0.5s;
  &:hover {
    width: 190px;
  }
`;

export const Crown = styled.img`
  width: 30px;
  position: relative;
  z-index: 10;
`;

export const CrownContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  z-index: 20;
  left: 50%;
  right: 50%;
  bottom: 90%;
`;

export const ImgConainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  background-color: ${Colors.black};
  margin: 12px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const InfoInner = styled.div`
  display: flex;
  justify-content: center;
  margin: 7px;
`;

export const Name = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 22px;
  font-weight: 700;
  color: ${Colors.white};
`;

export const Major = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 0.7rem;
  width: fit-content;
  color: ${Colors.white};
`;

export const Position = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 13px;
  padding: 5px;
  color: ${Colors.white};
`;
