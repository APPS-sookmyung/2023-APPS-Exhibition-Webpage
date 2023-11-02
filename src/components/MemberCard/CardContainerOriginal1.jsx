import styled from '@emotion/styled';

export const CardContainerOriginal1 = styled.div`
  display: flex;
  animation: OriginalRolling 20s linear infinite;

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
