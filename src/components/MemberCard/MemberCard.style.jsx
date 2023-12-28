import styled from '@emotion/styled';
import { Colors } from '../../theme';
import { keyframes } from '@emotion/react';
import { BREAKPOINTS } from '../../styles';

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

  animation: ${OriginalRolling} 60s linear infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerClone1 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${CloneRolling} 60s linear infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerOriginal2 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${OriginalRolling} 60s linear reverse infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const CardContainerClone2 = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;

  animation: ${CloneRolling} 60s linear reverse infinite;

  animation-play-state: ${(props) => (props.isHovered ? 'paused' : 'running')};
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  width: 180px;
  aspect-ratio: 18 / 26;
  margin: 20px 20px 0px 0px;
  border-radius: 15px;
  background: linear-gradient(90deg, ${Colors.purple} 0%, #120523 90%, #180038 100%);
  position: relative;
  transition: width 0.5s;

  &:hover {
    width: calc(180px * 1.2);
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 162px;
    margin: 18px 18px 0px 0px;
    padding: 12px;

    &:hover {
      width: calc(162px * 1.2);
    }
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 126px;
    margin: 14px 14px 0px 0px;
    padding: 10px;

    &:hover {
      width: calc(126px * 1.2);
    }
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

export const ImgContainer = styled.div`
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
  display: flex;
  align-self: center;
  justify-self: center;
  margin-bottom: 16px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const InfoInner = styled.div`
  display: flex;
  justify-content: center;
`;

export const Name = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 22px;
  font-weight: 600;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const Major = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 218px;
  text-align: center;
  color: ${Colors.lightGrey};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
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

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 6px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 4px;
  }
`;
