import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  /* width: calc(130px * 9); */
  width: 100%;
  overflow: hidden;
`;

export const ImgConainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
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
  transition: transform 1s;
  width: 120px;
  height: 120px;
  margin: 10px;
  border-radius: 5%;
  background: linear-gradient(90deg, #351068 0%, #120523 90%, #180038 100%);
  position: relative;
  overflow: hidden;
`;
