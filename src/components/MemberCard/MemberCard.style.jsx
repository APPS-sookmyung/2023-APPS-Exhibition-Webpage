import styled from '@emotion/styled';
import { Colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  /* width: calc(210px * 24); */
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

export const CardContainerOriginal1 = styled.div`
  display: flex;
  margin: 0px;
  animation: OriginalRolling 25s linear infinite;

  @keyframes OriginalRolling {
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
  }
`;

export const CardContainerClone1 = styled.div`
  display: flex;
  margin: 0px;

  animation: CloneRolling 25s linear infinite;

  @keyframes CloneRolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export const CardContainerOriginal2 = styled.div`
  display: flex;
  margin: 0px;

  animation: OriginalRolling 25s linear reverse infinite;

  @keyframes OriginalRolling {
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
  }
`;

export const CardContainerClone2 = styled.div`
  display: flex;
  margin: 0px;

  animation: CloneRolling 25s linear reverse infinite;

  @keyframes CloneRolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 230px;
  /* 위 | 오른쪽 | 아래 | 왼쪽 */
  margin: 20px 20px 0px 0px;
  border-radius: 5%;
  background: linear-gradient(90deg, #351068 0%, #120523 90%, #180038 100%);
  position: relative;
  overflow: hidden;
`;

export const Crown = styled.img`
  width: 30px;
`;

export const CrownContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  z-index: 20;
  left: 50%;
  right: 50%;
  bottom: 295px;
`;

export const ImgConainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
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
  font-size: 30px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Major = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;

  font-size: 15px;
  width: 230px;
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
