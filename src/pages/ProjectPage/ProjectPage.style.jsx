import { Link } from 'react-router-dom';
import { Colors } from '../../theme';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../styles';

export const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px 20px;
`;

export const YouTubeWrap = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  margin-bottom: 40px;
  border-radius: 8px;

  & > .projectPage__youTube {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProjectName = styled.h1`
  display: flex;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.3;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-bottom: 18px;
    font-size: 42px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 14px;
    font-size: 30px;
  }
`;

export const ProjectSummary = styled.p`
  display: flex;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${Colors.white};
  text-align: center;
  color: black;

  a {
    color: #333d4b;
    text-decoration: none;
  }
`;

export const Icon = styled.span``;

export const Text = styled.span`
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #333d4b;
  vertical-align: center;
`;

export const IconTextWrapper = styled.span`
  display: flex;
  align-items: center;

  & > .button_icon {
    font-size: 18px;
    color: '#333D4B';
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DevDescription = styled.div``;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 26px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const SectionDescription = styled.p`
  line-height: 1.6;
  font-size: 18px;
  white-space: pre-wrap;
  color: ${Colors.lightGrey};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const CircleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 18px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 14px;
  }
`;
export const MemberInfo = styled.div``;

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
  width: 36px;
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 32x;
    top: -16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 26px;
    top: -14px;
  }
`;

export const CircleBoxName = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  color: ${Colors.lightGrey};
  font-weight: 500;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberDescription = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  text-align: center;
  font-size: 18px;
  color: ${Colors.grey};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const ImageForSpace = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 24px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

export const ForSpace = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const ReviewContainer = styled.div`
  margin-top: 30px;
`;

export const ReviewTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 14px;
    padding: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
    padding: 16px;
  }
`;

export const ReviewCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${Colors.white};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const ReviewCardContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${Colors.lightGrey};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

// POCHAK 이미지

export const PochakImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  & > img {
    aspect-ratio: 16 / 9;
    border-radius: 8px;
  }
`;

export const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 32px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 18px;
  }
`;

export const CircleImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: #e5e5e5;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 74px;
    height: 74px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 64px;
    height: 64px;
  }
`;
