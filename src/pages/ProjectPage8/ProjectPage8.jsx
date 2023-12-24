import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage8.style';
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
        <S.ProjectName>나만의 운동일지</S.ProjectName>
        <S.ProjectSummary>운동 기록을 이모지로 한 눈에 확인해보세요</S.ProjectSummary>

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
            <Link to="https://github.com/gustj3104/2023-Diary">
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
          매일매일의 운동을 이모지로 기록하며 한눈에 운동 기록을 확인할 수 있습니다. <br />
          달력이 이모지로 채워나가는 것을 보며 뿌듯함과 즐거움을 느끼는 &quot;나만의 운동일지&quot;를 만들어나가는 서비스입니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          - 이모지, 일기 내용 기록 <br />
          - 이모지가 반영된 달력 기능 <br />
          - 일기를 확인할 수 있는 목차형 페이지 <br />
          - 일기의 수정, 삭제
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
                <S.MemberImage src="/images/member/윤현서.png" />
                <S.StackDescription>윤현서</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>윤현서 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>APPS를 통해 웹 프로그래밍 공부를 처음 시작하고, 프로젝트까지 
              도전해보는 소중한 경험이었습니다! 첫 프로젝트였던 만큼 어려움도 많았지만, 그 어려움을 스스로 극복해보며 많이 공부하고, 성장할 수 
              있었습니다. 이를 계기로 앞으로 진행하게 될 프로젝트에서는 더욱 좋은 결과를 만들어내는 개발자가 되고 싶습니다! 
              저의 첫 도전에 많은 도움과 조언을 주셨던 운영진분들 너무 감사합니다.💕</span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

