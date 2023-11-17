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
  padding-left: 5px;
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
  font-size: 22px;
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
  margin-right: 20px;
  width: 115px;
  height: 115px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
`;

export const StackImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  /* letter-spacing: 5px; */
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
  diplay: flex;
  margin-bottom: 50px;
`;
