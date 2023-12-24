import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage2.style';
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
        <S.ProjectName>POCHAK</S.ProjectName>
        <S.ProjectSummary>당신의 순간을 포착하세요!</S.ProjectSummary>

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
                <S.Text style={{ lineHeight: '10px' }}>Link</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="/your-link-path" style={{ textDecoration: 'none' }}>
              <S.IconTextWrapper>
                <S.Icon>
                  <img
                    src="/images/stackIcon/download.png"
                    alt="Download Icon"
                    style={{ width: '20px', height: '20px', fill: '#333D4B' }}
                  />
                </S.Icon>
                <S.Text style={{ lineHeight: '10px' }}>Download</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-POCHAK-ios">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-POCHAK-server">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Server</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>
        </S.ButtonContainer>

        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>

        <S.DevDescriptionTitle>서비스 설명</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          Pochak은 사용자가 직접 사진을 올리는 것이 아니라, 친구들이 사용자를 중심으로 촬영한 사진을 통해 자연스럽게 일상을 기록하고 
          공유하는 특별한 소셜 미디어 플랫폼입니다. 다양한 시각에서의 일상을 통해 사용자들에게 새로운 경험을 제공합니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          📸 친구들의 시선으로 기록되다:
          <br />
          Pochak은 다른 사용자들이 당신의 일상을 기록하도록 하는 독특한 서비스입니다. 당신은 자신의 카메라를 통해 아름다운 순간들을 기록하지 않아도, 친구들이나 팔로워들이 당신을 찍은 사진을 피드에 올려 공유할 수 있습니다.
          <br /><br />
          🔄 상호 작용과 공유:
          <br />
          Pochak은 사용자들이 서로의 순간에 참여하고 상호 작용할 수 있도록 하는 기능을 강조합니다. 댓글, 좋아요, 그리고 공유를 통해 순간들을 더 특별하게 만들어보세요!
          <br /><br />
          🌟 프로필의 다양성:
          <br />
          당신의 Pochak 프로필은 다른 사람들이 기록한 당신의 순간들을 보여줍니다. 여러 시각으로부터의 사진들이 모여 하나의 아름다운 이야기를 만들어냅니다
        </S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/SpringBoot.png" alt="Spring Boot" />
                <S.StackDescription>Spring Boot</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/swift.png" alt="React Native" />
                <S.StackDescription>swift</S.StackDescription>
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
                <S.MemberImage src="/images/member/서정연.png" />
                <S.StackDescription>서정연</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/장나리.png" />
                <S.StackDescription>장나리</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/황수연.png" />
                <S.StackDescription>황수연</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.MemberImage src="/images/member/김다연.png" />
                  <S.StackDescription>김다연</S.StackDescription>
                  <S.MemberDescription>Back-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>
          </S.ImageForSpace>

          <S.ForSpace />

          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/오지수.png" />
                <S.StackDescription>오지수</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/하고은.png" />
                <S.StackDescription>하고은</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
          </S.ImageForSpace>

        </S.DevDescription>
        <S.ForSpace></S.ForSpace>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;
