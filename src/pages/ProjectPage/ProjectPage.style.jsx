import { Colors } from '../../theme';
import styled from '@emotion/styled';

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px; 
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 250px;
  color: ${Colors.white};
`;

export const ProjectName = styled.div`
  display: flex;
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const ProjectSummary = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  background-color: ${Colors.white};
  color: black;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.span`
  font-size: 15px;
`;

export const Text = styled.span`
  font-size: 15px;
  padding-left: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const DescriptionTitle = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 800;
`;

export const DescriptionDetail = styled.div`
  margin-top: 20px;
  line-height: 1.7;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 45px;
`;

export const CircleImage = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  width: 80px;
  height: 80px;
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
`;

export const StackDescription = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
`;

export const MemberDescription = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: ${Colors.grey};
`;

export const ImageForSpace = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CircleForSpace = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CrownImage = styled.img`
  width: 100px; // 필요에 따라 가로 및 세로 크기를 조정하세요
  height: 100px;
  border-radius: 50%;
  position: relative; // 개발자 이미지의 위치를 상대 위치로 설정
  z-index: 1; // 이미지가 다른 요소 위에 표시되도록 설정
`;