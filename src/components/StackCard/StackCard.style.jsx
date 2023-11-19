import styled from '@emotion/styled';

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
  width: 100px;
  height: 100px;
  /* 위 | 오른쪽 | 아래 | 왼쪽 */
  margin: 20px 20px 0px 0px;
  border-radius: 5%;
  background: linear-gradient(90deg, #351068 0%, #120523 90%, #180038 100%);
  position: relative;
  overflow: hidden;
`;

export const CardContainerOriginalStack = styled.div`
  display: flex;
  margin: 0px;
  width: auto;

  animation: OriginalRollingStack 30s linear infinite;

  @keyframes OriginalRollingStack {
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

export const CardContainerCloneStack = styled.div`
  display: flex;
  margin: 0px;
  width: auto;

  animation: CloneRollingStack 30s linear infinite;

  @keyframes CloneRollingStack {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;
