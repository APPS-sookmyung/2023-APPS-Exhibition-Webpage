import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage.style';
import { useParams } from 'react-router-dom';
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
      <S.Inner>
        <S.YouTubeWrap>
          <YouTube
            className="projectPage__youTube"
            videoId={projectData.youtubeVideoId} // 동영상 뒤에 id 주소
            opts={{
              width: '100%',
              height: '100%',
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
        </S.YouTubeWrap>
        <S.Project>
          <S.ProjectName>{projectData.name}</S.ProjectName>
          <S.ProjectSummary>{projectData.summary}</S.ProjectSummary>
          <S.ButtonContainer>
            {projectData.downloadLinkUrl !== null && (
              <S.StyledLink
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
                      style={{ width: '18px', height: '18px', fill: '#333D4B' }}
                    />
                  </S.Icon>
                  <S.Text style={{ lineHeight: '10px' }}>Download</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.webpageLinkUrl !== null && (
              <S.StyledLink
                to={projectData.webpageLinkUrl}
                target="_blank"
                rel="noopner noreferrer"
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} className="button__icon" />
                  <S.Text>Link</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.githubUrls.clientUrl !== null && (
              <S.StyledLink
                to={projectData.githubUrls.clientUrl}
                target="_blank"
                rel="noopner noreferrer"
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} className="button__icon" />
                  <S.Text>Client</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
            {projectData.githubUrls.serverUrl !== null && (
              <S.StyledLink
                to={projectData.githubUrls.serverUrl}
                target="_blank"
                rel="noopner noreferrer"
              >
                <S.IconTextWrapper>
                  <FontAwesomeIcon icon={faGithub} className="button__icon" />
                  <S.Text>Server</S.Text>
                </S.IconTextWrapper>
              </S.StyledLink>
            )}
          </S.ButtonContainer>
          <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>
          {/* POCHAK 이미지 */}
          {projectData.id == 2 && (
            <S.PochakImgContainer>
              <img src={'/images/thumbnail/pochak/HOME.png'} alt="pochak_home" />
              <img src={'/images/thumbnail/pochak/PROFILE.png'} alt="pochak_profile" />
              <img src={'/images/thumbnail/pochak/SEARCH&ADD&ALARM.png'} alt="pochak_search" />
              <div
                style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}
              ></div>
            </S.PochakImgContainer>
          )}

          <S.SectionGroup>
            <S.Section>
              <S.SectionTitle>서비스 소개</S.SectionTitle>
              <S.SectionDescription>{projectData.introduction}</S.SectionDescription>
            </S.Section>

            <S.Section>
              <S.SectionTitle>기능 설명</S.SectionTitle>
              <S.SectionDescription>{projectData.description}</S.SectionDescription>
            </S.Section>

            <S.Section>
              <S.SectionTitle>기술 스택</S.SectionTitle>
              <S.ImageForSpace>
                {projectData.techStackList.map(({ name, imageUrl }) => (
                  <S.CircleBox key={name}>
                    <S.CircleImageWrap>
                      <S.StackImage src={imageUrl} alt={name} />
                    </S.CircleImageWrap>
                    <S.CircleBoxName>{name}</S.CircleBoxName>
                  </S.CircleBox>
                ))}
              </S.ImageForSpace>
            </S.Section>

            <S.Section>
              <S.SectionTitle>개발자</S.SectionTitle>
              <S.ImageForSpace>
                {projectData.memberList.map(({ id, name, role, job, imageUrl }) => (
                  <S.CircleBox key={id}>
                    <S.CircleImageWrap>
                      {role === 'LEADER' && (
                        <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                      )}
                      <S.MemberImage src={imageUrl} alt={`${name}의 프로필`} />
                    </S.CircleImageWrap>
                    <S.MemberInfo>
                      <S.CircleBoxName>{name}</S.CircleBoxName>
                      <S.MemberDescription>{job}</S.MemberDescription>
                    </S.MemberInfo>
                  </S.CircleBox>
                ))}
              </S.ImageForSpace>
            </S.Section>

            <S.Section>
              <S.SectionTitle>회고</S.SectionTitle>
              <S.ReviewBox>
                {projectData.memberList.map(({ id, name, job, retrospect }) => (
                  <S.ReviewCard key={id}>
                    <S.ReviewCardTitle>
                      {name} / {job}
                    </S.ReviewCardTitle>
                    <S.ReviewCardContent>{retrospect}</S.ReviewCardContent>
                  </S.ReviewCard>
                ))}
              </S.ReviewBox>
            </S.Section>
          </S.SectionGroup>
        </S.Project>
      </S.Inner>
    </PageLayout>
  );
};

export default ProjectPage;
