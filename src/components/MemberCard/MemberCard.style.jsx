import styled from '@emotion/styled';
import { Colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 200px;
  border-radius: 5%;
  background: linear-gradient(90deg, #351068 0%, #120523 90%, #180038 100%);
`;

export const CardInner = styled.div`
  height: 100%;
  justify-content: center;
  gap: 40px;
  padding: 10px;
`;

export const Crown = styled.div`
  background-image: url('../../../public/images/member/crown.png');
  background-size: 100%;
  width: 20px;
`;

export const ImgConainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: 100%;
  border-radius: 50%;
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
