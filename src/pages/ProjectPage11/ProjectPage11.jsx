import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage11.style';
import { Link } from 'react-router-dom';

import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectPage = () => {
  return (
    <PageLayout
      header={<Header />}
      background="linear-gradient(180deg, #351068 0%, #270F49 55.73%, #0D0D0D 100%)"
    >
      <S.Centered>
        <YouTube
          videoId="28qM1WwLsRo" // 동영상 뒤에 id 주소
          opts={{
            width: '896px',
            height: '476px',
            playerVars: {
              autoplay: 1, // 자동 재생 여부
              modestbranding: 1, // 컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, // 반복 재생
              playlist: '28qM1WwLsRo', // 반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </S.Centered>

      <S.Project>
        <S.ProjectName>Photoshop_HR</S.ProjectName>
        <S.ProjectSummary>사진을 편집해보고 자랑하세요!</S.ProjectSummary>

        <S.ButtonContainer>
          <S.StyledButton>
            <Link to="/your-link-path" style={{ textDecoration: 'none' }}>
              <S.IconTextWrapper>
                <S.Icon>
                  <img
                    src="/images/stackIcon/link.png"
                    alt="Link Icon"
                    style={{ width: '20px', height: '20px', fill: '#333D4B', marginRight: '3px' }}
                  />
                </S.Icon>
                <S.Text style={{ lineHeight: '10px'}}>Link</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>
          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-web-project-photoshopt">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

        </S.ButtonContainer>

        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>

        <S.DevDescriptionTitle>서비스 설명</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>사진을 좋아하고 또 편집에 관심 있는 여러분을 위한 사진 편집기 서비스입니다.</S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          사진을 일반적인 편집과 더불어 여러 세부적인 기능들로 보다 더 정교한 편집이 이루어 질 수 있도록 하였습니다.
          <br /><br />
          - 일반 편집: 사진을 확대 및 축소 등등 일반적인 기능들로 구성되었습니다. <br />
          - 컬러 편집: 사진 위 자신의 그림을 그려보기도 하고 여러 색을 추출할 수 있는 색조 편집 기능들로 구성되었습니다. <br />
          - 게시판: 다 편집한 사진들은 모두와 함께 공유하고 자랑해보세요
        </S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/HTML.png" alt="React Native" />
                <S.StackDescription>HTML</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/CSS.png" alt="React Native" />
                <S.StackDescription>CSS</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/JavaScript.png" alt="React Native" />
                <S.StackDescription>JavaScript</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>

        <S.DevDescription>
          <S.DevDescriptionTitle>개발자</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/이해림.png" />
                <S.StackDescription>이해림</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
          </S.ImageForSpace>

        </S.DevDescription>
        <S.ForSpace></S.ForSpace>
        <S.ReviewTitle>팀 회고</S.ReviewTitle>
        <S.ReviewContainer>
          <S.ReviewCard className='review-card' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <div style={{ width: '100%' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>이해림 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>
                좋은 경험이었습니다 (임시)
              </span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

