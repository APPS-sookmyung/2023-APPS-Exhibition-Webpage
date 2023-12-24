import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage14.style';
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
        <S.ProjectName>Colog</S.ProjectName>
        <S.ProjectSummary>뿌듯함을 채워주고 성취감을 극대화하는 프로그래머 전용 타이머 앱, 코록</S.ProjectSummary>

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
            <Link to="https://github.com/APPS-sookmyung/2023-Colog">
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
          프로그래머만의 뿌듯함을 느끼고 싶으신가요? 나만의 코딩 기록 서비스, 코록은 타이머, 뽀모도로 등 집중을 위한 최적의 환경을 제공하고 월 별 
          통계를 통해 성취감을 극대화합니다. 코딩 시간, 기술 블로그 업로드 등 코딩 기록을 한 곳에 모아 보세요!
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          타이머, 뽀모도로 등 집중할 수 있는 환경을 제공하고 스스로 얼마만큼 코딩했는지 눈으로 쉽게 확인할 수 있도록 했습니다. 또한, 기술 블로그 업로드, Git 커밋 등 코딩과 관련된 공부를 객관적인 지표로 나타냅니다.
          <br /><br />
          - 스스로 얼마나 공부했는지 체크할 수 있는 타이머 기능 제공 <br />
          - 정해진 시간 내 최대 효율을 끌어올릴 수 있는 뽀모도로 기능 제공 <br />
          - 월 별 통계 및 일 별 통계 기능을 통한 객관적 지표 확인 <br />
          - 투두 리스트로 오늘의 할 일 체크
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
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/React.png" alt="React.js" />
                <S.StackDescription>React.js</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/NodeJS.png" alt="React Native" />
                <S.StackDescription>Node.js</S.StackDescription>
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
                <S.MemberImage src="/images/member/주아정.png" />
                <S.StackDescription>주아정</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>주아정 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>리액트를 배우기만 했지, 쓸 기회가 없었는데 
              이번 프로젝트를 통해 리액트를 실제로 사용해봐서 좋았어요! 확실히 실제로 프로젝트하면서 몸으로 익히는 것과 강의를 통해 따라치는 것은 
              다르다는 걸 느꼈습니다. 여러 일정이 겹쳐 프로젝트 기간이 짧아 다양한 기능과 애니메이션을 구현하지 못해 아쉬웠어요. 
              추후에 꼭 프로젝트 디벨롭을 진행해보겠습니다... 백엔드도 구현하는 것이 저의 최종 목표! 타 프로젝트를 참고하며 열심히 공부할 수 있어 
              좋았습니다. 더 멋진 개발자가 되도록 노력하겠습니다!</span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

