import { Colors } from '../../theme';
import styled from '@emotion/styled';

export const Centered = styled.div`
  display: flex;
  /* max-width: 500px; */
  justify-content: center;
  margin-top: 116px;
`;

export const Project = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  color: ${Colors.white};
`;

export const ProjectName = styled.div`
  display: flex;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ProjectSummary = styled.div`
  display: flex;
  font-size: 22px;
  margin-bottom: 30px;
`;

export const StyledButton = styled.button`
  background-color: ${Colors.white};
  color: black;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 10px;
  /* margin-top: 20px; */
  margin-right: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #333d4b;
    text-decoration: none;
  }
`;

export const Icon = styled.span`
  font-size: 30px;
`;

export const Text = styled.span`
  font-size: 18px;
  padding-left: 8px;
  vertical-align: center;
`;

export const IconTextWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-bottom: 20px; */
`;

export const DevDescription = styled.div``;

export const DevDescriptionTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

export const DevDescriptionDetail = styled.div`
  margin-top: 20px;
  line-height: 1.4;
  font-size: 18px;
  margin-bottom: 50px;
`;

export const CrownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CircleImage = styled.div`
  /* margin-top: 20px; */
  margin-right: 60px;
  width: 115px;
  height: 115px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
`;

export const StackImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  padding: 10px;
`;

export const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

export const CrownImage = styled.img`
  width: 40px;
  height: 30px;
  position: absolute;
  top: -15px; /* 테두리 위에 위치하도록 조정 */
  left: 50%; /* 가운데 정렬을 위해 조정 */
  transform: translateX(-50%); /* left 값의 절반만큼 이동시킴으로써 가운데 정렬 */
  z-index: 2;
`;

export const StackDescription = styled.div`
  margin-top: 18px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 18px;
`;

export const MemberDescription = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${Colors.grey};
`;

export const ImageForSpace = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const CircleForSpace = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ForSpace = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const ReviewTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`;

export const ReviewCard = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px;
`;

export const ReviewName = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;