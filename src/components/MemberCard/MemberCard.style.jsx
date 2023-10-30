import styled from '@emotion/styled';
import { Colors } from '../../theme';

// const windowWidth = window.innerWidth;

export const Container = styled.div`
  display: flex;
  width: calc(210px * 24);
`;

export const CardContainerOriginal1 = styled.div`
  display: flex;
  // animation: OriginalRolling 15s linear infinite;

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

  // animation: CloneRolling 15s linear infinite;

  @keyframes CloneRolling {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export const CardContainerOriginal2 = styled.div`
  display: flex;
  // animation: OriginalRolling 15s linear reverse infinite;

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

  // animation: CloneRolling 15s linear reverse infinite;

  @keyframes CloneRolling {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;
export const Card = styled.div`
  justify-content: center;
  gap: 40px;
  padding: 10px;
  transition: transform 1s;
  width: 200px;
  margin: 10px;
  border-radius: 5%;
  background: linear-gradient(90deg, #351068 0%, #120523 90%, #180038 100%);
`;

export const Crown = styled.div`
  width: 20px;
`;

export const ImgConainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
  backgroung-repeat: no-repeat;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  background-color: ${Colors.black};
`;

export const InfoInner = styled.div`
  justify-content: center;
  margin: 12px;
`;

export const Name = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Major = styled.p`
  display: flex;
  justify-content: center;
  font-size: 13px;
  width: 150px;
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
