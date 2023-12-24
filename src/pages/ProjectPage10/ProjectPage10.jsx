import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage10.style';
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
        <S.ProjectName>EzEat</S.ProjectName>
        <S.ProjectSummary>오늘 점심 뭐먹지?</S.ProjectSummary>

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
            <Link to="https://github.com/APPS-sookmyung/2023-EzEat">
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
          배는 고픈데, 뭐를 먹어야 잘 먹었다고 소문이 날까... &quot;선택장애&quot; 인 
          사람들을 위해 대신 메뉴를 정해드려요! 근방 몇분 거리 내의 음식점들을 찾아보고 싶거나, 땡기는 음식 종류가 있을 때! 한눈에 음식점들을 확인해볼 수 
          있어요 :)
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          사용자가 메뉴선택 기준 ( 거리별 or 음식종류 별 ) 을 선택하여, 사용자의 상황에 맞는 음식을 선택할 수 있습니다. 
          <br />또한, 여러 음식들 중 하나를 선택하는데 어려움이 있다면 &quot;룰렛돌리기&quot; 기능을 통해 랜덤으로 메뉴를 정할 수 있으며, 
          선택한 음식들은 자동으로 저장되어, 식단정리까지 이어지는 서비스를 구현했습니다.
          <br /><br />
          - 사용자가 거리별(5분, 10분 ..) or 음식종류별 중 어떤 기준으로 음식을 선택할지 선택 <br />
          - 사용자의 선택에 따라, 현재 위치와 가까운 순서대로 음식점들을 정렬 <br />
          - 음식점을 누르면, 음식점에서 파는 음식들에 대한 상세정보 확인 가능 <br />
          - 여러가지 음식을 누르고 &quot;룰렛 돌리기&quot; 를 선택할 시, 룰렛결과, 랜덤으로 메뉴 선정 <br />
          - 룰렛을 돌리지 않고 메뉴를 선택하거나, 룰렛을 돌려서 메뉴를 선택하는 경우 ( 최종선택 ) 모두 &quot;그동안 먹은 음식들&quot; 리스트에 자동으로 저장되어 기록 <br />
          <br /><br />
          🍽️EzEat 으로 고민시간은 최소로, 행복시간😋은 최대로 🍽️
        </S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/React.png" alt="React.js" />
                <S.StackDescription>React.js</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/firebase.png" alt="Firebase" />
                <S.StackDescription>Firebase</S.StackDescription>
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
                <S.MemberImage src="/images/member/이채은.png" />
                <S.StackDescription>이채은</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>이채은 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>
                기획과 디자인, 그리고 개발까지 모두 혼자 해야했던 개인 프로젝트여서 힘들었던 만큼 많은 걸 배울 수 있어서 좋았습니다. 
                앞으로 다양한 직군들과 커뮤니케이션을 할때에도 해당 프로젝트를 하면서 배운 것들을 잘 이용해볼 수 있을 것 같습니다. 
                또한, 혼자 개발을 하는 습관도 기를 수 있었다는 점에서 정말 유익했던 것 같습니다. 
                또한, react 로 개발을 하고 앱으로 전환하려고 하니 조금 까다롭더라고요. 안드로이드를 배우고 싶다는 생각도 하게 되었던 것 같습니다.
                너무 즐거웠습니다. 감사합니다.</span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

