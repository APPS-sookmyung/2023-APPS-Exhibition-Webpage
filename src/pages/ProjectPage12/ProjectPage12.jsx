import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage12.style';
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
        <S.ProjectName>Frame</S.ProjectName>
        <S.ProjectSummary>나의 시선을 업로드하고 타인의 시선을 체험해 보세요.</S.ProjectSummary>

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
            <Link to="https://github.com/seoy-54/2023-Frame">
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
          Frame은 다양한 주제와 스타일의 사진을 업로드하고 공유할 수 있는 공간으로 다양한 사용자의 사진들을 만나볼 수 있습니다.
          <br /><br />
          *업로드되는 사진은 모든 사용자에게 공개되며 저작권에 대한 사전 동의가 이루어집니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          실시간으로 업로드되는 사진들이 있는 전체 페이지와 주제별, 사용자별로 사진을 모아 볼 수 있게 했습니다. 또한 디지털카메라와 필름 카메라로 찍은 사진을 구분하고 필름의 종류에 따라 역시 모아 볼 수 있습니다.
          <br /><br />
          - 사진 업로드 <br />
          - 전체, 주제, 사용자로 나누어진 메뉴 <br />
          - 같은 필름 사진 모아보기 <br />
          - 사진 좋아요 및 실시간 인기 사진 <br /><br />

          자신의 시선이 담긴 사진을 다른 사람들과 공유해 보세요.
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
                <S.MemberImage src="/images/member/정서연.png" />
                <S.StackDescription>정서연</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>정서연 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>
              Frame은 정말 기획부터 개발까지 혼자 했던 첫 프로젝트입니다. 처음 하다 보니 당연히 어려움도 많았죠. 
              머릿속에 막연하게 존재하는 것을 개발로 눈으로 볼 수 있게 하는 작업은 절대 쉽지 않아 가끔은 PPT 만드는 것처럼 옮기고 싶다는 생각까지 
              했어요. 기획했던 모든 기능을 다 실현하지는 못했지만, 내 아이디어를 통해서 그럴듯한 결과물을 산출했다는 것에 저는 큰 의의를 두고 
              이 경험을 오래 기억할 것 같아요. 이 기억이 앞으로 하는 일에 힘이 되길 바라면서요. 처음 진행한 프로젝트! 다음엔 팀 프로젝트로 더욱 
              좋은 서비스를 제공할 수 있도록 노력하여 돌아오겠습니다~!
              </span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

