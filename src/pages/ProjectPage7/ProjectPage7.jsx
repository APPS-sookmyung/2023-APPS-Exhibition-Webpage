import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage7.style';
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
        <S.ProjectName>DevInsight</S.ProjectName>
        <S.ProjectSummary>IT 기업들의 혁신적인 기술과 동향을 한 곳에 만나보세요!</S.ProjectSummary>

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
            <Link to="https://github.com/APPS-sookmyung/2023-DevInsight">
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
          IT 기업들의 혁신적인 기술과 동향을 소개하는 영상과 이야기 그리고 세미나들을 한 곳에서 손쉽게 찾고 경험할 수 있는 서비스입니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          더 이상 번거로운 수백 개의 개발 기술 웹사이트를 돌아다니지 않아도 됩니다. 주요 IT 플랫폼 기업들인 토스, 네이버, 카카오, 그리고 우아한 형제들의 기술 영상과 세미나를 편리하게 한 곳에서 확인하세요.
          <br /><br />
          - 우수한 기술과 지식을 나누며 탁월함을 추구하는 기술 영상
          <br />
          - 훌륭한 개발자들의 기술 노하우와 경험이 녹아든 개발 이야기
          <br />
          - 온라인 및 오프라인에서 진행된 다양한 기술 공유 세미나 영상
          <br />
          - 개발자들의 다양한 기술 이야기와 개발 경험을 직접 들을 수 있는 행사 소개
          <br /><br />
          🏆 모든 기술 영상과 세미나를 손쉽게 확인해보세요! 🏆
        </S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/HTML.png" alt="HTML" />
                <S.StackDescription>HTML</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/CSS.png" alt="CSS" />
                <S.StackDescription>CSS</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/JavaScript.png" alt="JavaScript" />
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
                <S.MemberImage src="/images/member/류미성.png" />
                <S.StackDescription>류미성</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>류미성 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>첫 개인 프로젝트를 마무리하고 나니, 뿌듯한 마음이 가장 큰 것 같습니다. 
                이 프로젝트를 통해 기획부터 개발까지의 과정을 경험하면서 많은 것을 배울 수 있었습니다. 여러 레퍼런스를 찾아보며 내가 제공할 서비스의 좋은 UI/UX가 
                과연 무엇일지, 어떻게 하면 더 나은 방향으로 개선할 수 있을지 등에 대해 많은 고민을 하였습니다. 개발 과정에서는 해결되지 않은 부분이 있어 몇 일을 
                몰입해서 해결하려고 노력한 날 들도 있었는데, 이 과정에서도 많이 성장할 수 있었습니다.
                이 프로젝트를 통해 스스로 얼마나 발전하고 성장했는지를 몸소 느낄 수 있었고, 앞으로의 프로젝트에서도 이번 경험을 살려 더 나은 결과물을 만들어 나가고 싶습니다😁</span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

