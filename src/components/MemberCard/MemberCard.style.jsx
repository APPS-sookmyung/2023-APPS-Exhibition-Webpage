import styled from '@emotion/styled';
import { Colors } from '../../theme';

// const windowWidth = window.innerWidth;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;

  // width: calc(210px * 24);
`;

export const CardContainer = styled.div`
  display: flex;
  overflow: hidden;

  animation: 5s linear infinite normal none running scroll;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.1% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const CardContainer1 = styled.div`
  display: flex;
  overflow: hidden;

  animation: 5s linear infinite infiniteAnimation2;

  @keyframes infiniteAnimation2 {
    0% {
      transform: translateX(0%);
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
  background-image: url('../../../public/images/member/crown.png');
  background-size: 100%;
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
