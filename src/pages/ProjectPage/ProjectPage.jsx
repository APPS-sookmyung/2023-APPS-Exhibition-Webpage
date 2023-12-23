import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage.style';
import { Link } from 'react-router-dom';
import { Colors } from '../../theme';

import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectPage = () => {
  return (
    <PageLayout
      header={<Header />}
      background={`linear-gradient(180deg, ${Colors.purple} 0%, #270F49 55.73%, #0D0D0D 100%)`}
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
        <S.ProjectName>Cookiee-</S.ProjectName>
        <S.ProjectSummary>하루하루의 쿠키를 모아보세요!</S.ProjectSummary>

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
            <Link to="https://github.com/APPS-sookmyung/2023-COOKIEE-client-react">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-COOKIEE-server">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Server</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>
        </S.ButtonContainer>

        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>

        <S.DevDescriptionTitle>서비스 소개</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          모기의 예방법과 퇴치 방법을 검색한 사람들을 위해 ! 살충제, 모기향 등 모기 퇴치 물품을
          구매하는 사람들을 위해 ! 다가오는 여름철, 모기로 인한 스트레스를 해소시켜주기 위한 보건
          복지 분야 서비스입니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기능 설명</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          모기 예방법과 퇴치법을 모아 한 서비스 내에서 제공하여 피해를 줄이고, 온보딩 화면, 사이렌
          기능 등 재미요소 제공을 통해 적시에 정보를 조회하도록 돕는 서비스를 고안했습니다.
          <br />
          <br />- 서비스를 통해 쾌적, 관심, 주의 ,불쾌 4단계로 나누어진 모기발생 상황을 확인
          <br /> - 모기에 대한 정보 및 예방법을 제공하는 오늘의 모기 꿀팁
          <br /> - 퇴치법 조회 뷰에서 랜덤하게 추천된 모기 퇴치법
          <br /> - 랭킹 뷰에서 다른 유저들이 평가한 모기 퇴치법에 대한 랭킹을 확인
          <br />
          <br /> 🌀🧞‍♂️ 위잉위잉과 함께 모기 스트레스없는 쾌적한 생활하시길 바랍니다 🧞‍♂️🌀
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
                <S.StackImage src="/images/stackIcon/React.png" alt="React Native" />
                <S.StackDescription>React Native</S.StackDescription>
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
                <S.MemberImage src="/images/member/kyungminseo.png" />
                <S.StackDescription>경민서</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/yoonseohee.jpg" />
                <S.StackDescription>윤서희</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/yoonseohee.jpg" />
                <S.StackDescription>황수연</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.MemberImage src="/images/member/joyoungseo.png" />
                  <S.StackDescription>조영서</S.StackDescription>
                  <S.MemberDescription>Back-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;
