import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage.style';
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
            width: "896px",
            height: "476px",
            playerVars: {
              autoplay: 1, // 자동 재생 여부 
              modestbranding: 1, // 컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, // 반복 재생
              playlist: "28qM1WwLsRo", // 반복 재생으로 재생할 플레이 리스트
            },
          }}
          onReady={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </S.Centered>

      <S.Project>
        <S.ProjectName>
          Cookiee-
        </S.ProjectName>
        <S.ProjectSummary>
          하루하루의 쿠키를 모아보세요!
        </S.ProjectSummary>

        <S.ButtonContainer>
          <S.StyledButton>
            <Link to="/your-link-path" style={{ textDecoration: 'none' }}>
              <S.Icon style={{ color: '#333D4B' }}>🔗</S.Icon>
              <S.Text>Link</S.Text>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-COOKIEE-client-react" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <S.Text>Github</S.Text>
            </Link>
          </S.StyledButton>
        </S.ButtonContainer>
        
        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '50px 0' }}></div>

        <S.DescriptionTitle>
          서비스 설명
        </S.DescriptionTitle>
        <S.DescriptionDetail>
          우리의 서비스는 <br/> 블라블라
        </S.DescriptionDetail>

        <S.DescriptionTitle>
          기획의도
        </S.DescriptionTitle>
        <S.DescriptionDetail>
          우리의 기획의도는 <br/> 블라블라
        </S.DescriptionDetail>

        <S.DescriptionTitle>
          기술 스택
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="images/stackIcon/Spring.png" alt="Spring Boot" />
                <S.StackDescription>Spring Boot</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="images/stackIcon/ReactNative.png" alt="React Native" />
                <S.StackDescription>React Native</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
          </S.ImageForSpace>
        </S.DescriptionTitle>
        <S.ForSpace></S.ForSpace>
        <S.DescriptionTitle>
          참여한 개발자
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="images/member/kyungminseo.png"/>
                <S.StackDescription>경민서</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="images/member/yoonseohee.jpg"/>
                <S.StackDescription>윤서희</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="images/member/yoonseohee.jpg"/>
                <S.StackDescription>황수연</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.StackImage src="images/member/joyoungseo.png"/>
                  <S.StackDescription>조영서</S.StackDescription>
                  <S.MemberDescription>Back-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>

          </S.ImageForSpace>
        </S.DescriptionTitle>
        <S.ForSpace></S.ForSpace>
      </S.Project>

    </PageLayout>
  );
};

export default ProjectPage;
