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
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 30px;
`;

export const ProjectSummary = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 60px;
`;

export const StyledButton = styled.button`
  background-color: ${Colors.white};
  color: black;
  width: 181px;
  height: 68px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #333D4B;
    text-decoration: none;
  }
`;

export const Icon = styled.span`
  font-size: 30px;
`;

export const Text = styled.span`
  font-size: 30px;
  padding-left: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const DescriptionTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
`;

export const DescriptionDetail = styled.div`
  margin-top: 30px;
  line-height: 1.7;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 70px;
`;

export const CrownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CircleImage = styled.div`
  margin-top: 20px;
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
  z-index: 2;
`;

export const StackDescription = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
`;

export const MemberDescription = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${Colors.grey};
`;

export const ImageForSpace = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  margin-bottom: 70px;
`;

export const CircleForSpace = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ForSpace = styled.div`
  diplay: flex;
  margin-bottom: 70px;
`;