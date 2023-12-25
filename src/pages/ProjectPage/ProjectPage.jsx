import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage.style';
import { Link, useParams } from 'react-router-dom';
import { Colors } from '../../theme';

import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { PROJECT_LIST } from '../../database';

const ProjectPage = () => {
  const { projectId } = useParams();
  const projectData = PROJECT_LIST.find(({ id }) => id === Number(projectId));

  return (
    <PageLayout
      header={<Header />}
      background={`linear-gradient(180deg, ${Colors.purple} 0%, #270F49 55.73%, #0D0D0D 100%)`}
    >
      <S.Centered>
        <YouTube
          videoId={projectData.youtubeVideoId} // 동영상 뒤에 id 주소
          opts={{
            width: '896px',
            height: '476px',
            playerVars: {
              autoplay: 1, // 자동 재생 여부
              modestbranding: 1, // 컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, // 반복 재생
              playlist: projectData.youtubeVideoId, // 반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </S.Centered>

      <S.Project>
        <S.ProjectName>{projectData.name}</S.ProjectName>
        <S.ProjectSummary>{projectData.summary}</S.ProjectSummary>

        <S.ButtonContainer>
          {projectData.downloadLinkUrl !== null && (
            <S.StyledButton>
              <Link
                to={projectData.downloadLinkUrl}
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopner noreferrer"
              >
                <S.IconTextWrapper>
                  <S.Icon>
                    <img
                      src="/images/buttonIcon/download.png"
                      alt="Download Icon"
                      style={{ width: '20px', height: '20px', fill: '#333D4B' }}
                    />
                  </S.Icon>
                  <S.Text style={{ lineHeight: '10px' }}>Download</S.Text>
                </S.IconTextWrapper>
              </Link>
            </S.StyledButton>
          )}

          {projectData.githubUrls.clientUrl !== null && (
            <S.StyledButton>
              <Link to={projectData.githubUrls.clientUrl} target="_blank" rel="noopner noreferrer">
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                  <S.Text>Client</S.Text>
                </S.IconTextWrapper>
              </Link>
            </S.StyledButton>
          )}

          {projectData.githubUrls.serverUrl !== null && (
            <S.StyledButton>
              <Link to={projectData.githubUrls.serverUrl} target="_blank" rel="noopner noreferrer">
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                  <S.Text>Server</S.Text>
                </S.IconTextWrapper>
              </Link>
            </S.StyledButton>
          )}
        </S.ButtonContainer>

        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>

        <S.DevDescriptionTitle>서비스 소개</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>{projectData.introduction}</S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기능 설명</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>{projectData.description}</S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            {projectData.techStackList.map(({ name, imageUrl }) => (
              <S.CircleImage key={name}>
                <S.CircleForSpace>
                  <S.StackImage src={imageUrl} alt={name} />
                  <S.StackDescription>{name}</S.StackDescription>
                </S.CircleForSpace>
              </S.CircleImage>
            ))}
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>

        <S.DevDescription>
          <S.DevDescriptionTitle>개발자</S.DevDescriptionTitle>

          <S.ImageForSpace>
            {projectData.memberList.map(({ id, name, role, job, imageUrl }) => (
              <S.CircleImage key={id}>
                <S.CircleForSpace>
                  {role === 'LEADER' && <S.CrownImage src="/images/member/crown.png" alt="Crown" />}
                  <S.MemberImage src={imageUrl} />
                  <S.StackDescription>{name}</S.StackDescription>
                  <S.MemberDescription>{job}</S.MemberDescription>
                </S.CircleForSpace>
              </S.CircleImage>
            ))}
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>

        <S.ReviewTitle>팀 회고</S.ReviewTitle>
        <S.ReviewContainer>
          {projectData.memberList.map(({ id, name, job, retrospect }) => (
            <S.ReviewCard key={id}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {name} / {job}
              </h3>
              <span style={{ lineHeight: '1.5' }}>{retrospect}</span>
            </S.ReviewCard>
          ))}
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;
