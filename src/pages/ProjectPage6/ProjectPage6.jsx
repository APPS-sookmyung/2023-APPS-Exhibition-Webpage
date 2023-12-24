import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage6.style';
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
        <S.ProjectName>SMSW Web</S.ProjectName>
        <S.ProjectSummary>새롭게 개선된 숙명여대 소프트웨어학부 홈페이지입니다!</S.ProjectSummary>

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
            <Link to="https://github.com/APPS-sookmyung/2023-SMSW-Web-Project-client">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

        </S.ButtonContainer>

        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>

        <S.DevDescriptionTitle>서비스 설명</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          기존의 숙명여자대학교 소프트웨어학부의 홈페이지의 부족한점을 포착하고 개선했습니다! 학생들에게 필요한 정보와 기능을 추가하였습니다 😃
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          정보와 기능을 둘다 담은 새로운 소프트웨어학부 홈페이지.
          <br /><br />
          ❄️ 전송소개, 커리큘럼, 교수님 소개와 같은 학과에 대한 정보는 기본으로 담았습니다!
          <br />
          ❄️ 기존의 홈페이지에는 없던 전공 바구니 기능을 추가하였습니다!
          내가 들은 과목과 앞으로 들을 과목에 대해 계획을 세워볼 수 있습니다.
          <br />
          ❄️ 학생회 페이지를 추가하여 1년 동안의 학생회 활동을 보면서 
          <br /><br />
          한 해 학과 행사를 기억할 수 있습니다!
        </S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/React.png" alt="React Native" />
                <S.StackDescription>React.js</S.StackDescription>
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
                <S.MemberImage src="/images/member/경민서.png" />
                <S.StackDescription>경민서</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>경민서 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>1학기에 운영진분들과 함께 배웠던 웹 지식들을 프로젝트에 
              바로 쓸 수 있어서 좋았습니다 😊 제가 그동안 생활하면서 학과 홈페이지에 더 다양한 내용들이 있으면 좋겠다구 부족하게 느꼈던 부분들을 
              실제로 고쳐볼 수 있는 기회였던 점에서 의미 있는 프로젝트였습니다! 첫 웹 프로젝트였던 만큼 중간에 완전히 새로 시작하면서 시행착오도 
              많았던 것 만큼 좋은 경험이 되었습니다 😇</span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

