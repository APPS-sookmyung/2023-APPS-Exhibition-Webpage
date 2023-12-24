import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage4.style';
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
        <S.ProjectName>APPS Check</S.ProjectName>
        <S.ProjectSummary>출석체크 어플을 통해 손쉽게 출석 기록을 관리해보아요!</S.ProjectSummary>

        <S.ButtonContainer>
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
                <S.Text style={{ lineHeight: '10px'}}>Download</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-AppsCheck">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-AppsCheck-server">
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
          Sookmyng APPS 부원들을 위한 출석 체크 앱, AppsCheck입니다. 
          <br />세미나 장소에 도착해서 출석할 수 있는 기능과 함께, 나의 과거 출석 기록도 살펴볼 수 있습니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          동아리 부원들은 세미나 장소에 도착하여 간편한 출석체크를 수행하며, 운영진은 실시간으로 부원들의 출석 상태를 효과적으로 관리할 수 있습니다.
          <br /><br />
          - 세미나 일정과 장소를 사전에 확인하고, 그날의 주요 공지사항을 손쉽게 접할 수 있습니다.
          <br />
          - 출석이 불가한 경우, 동아리 부원들은 해당 사유를 작성하고 표시할 수 있습니다.
          <br />
          - 동아리 운영진은 출석 시간을 실시간으로 받아보며, 부원별 출석 통계자료를 간편하게 확인할 수 있습니다.
          <br /><br />
          출석체크☑️ 간편하게 해보아요😁
        </S.DevDescriptionDetail>

        <S.DevDescription>
          <S.DevDescriptionTitle>기술 스택</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/firebase.png" alt="Firebase" />
                <S.StackDescription>Firebase</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.StackImage src="/images/stackIcon/React.png" alt="React" />
                <S.StackDescription>React</S.StackDescription>
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

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/신진영.png" />
                <S.StackDescription>신진영</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.MemberImage src="/images/member/이채은.png" />
                  <S.StackDescription>이채은</S.StackDescription>
                  <S.MemberDescription>Front-end</S.MemberDescription>
                  <S.MemberDescription>Back-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>

          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>
        <br />
        <S.ReviewTitle>팀 회고</S.ReviewTitle>
        <S.ReviewContainer>
          <S.twoContainer>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>류미성 / Frontend</span><br /><br />
                <span style={{ lineHeight: '1.5'}}>이번 프로젝트를 통해 유쾌한 팀원들을 만나 협업하는 방법도 배우고, 즐겁게 개발 할 수 있었습니다.
                  팀원들과 소통을 통해 서비스에 대한 아이디어를 나누고 머리 맞대어 고민하는 시간도 있었습니다. 또 서로의 부족한 부분을 채워가면서 
                  개발에 참여하게 되어 즐거웠습니다. 
                  이번 프로젝트에서 얻은 경험과 팀원들과의 소중한 협업 경험을 잊지 못 할 것 같습니다💗</span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>이채은 / Frontend, Backend, 팀장 </span><br /><br />
                <span style={{ lineHeight: '1.5' }}>개인 프로젝트도 유익했지만, 아무래도 가장 재밌었던 건 다같이 하는 프로젝트였던 것 같습니다. 
                저는 이미 기획과 디자인이 마무리된 이후 투입되었습니다. 디자인과 기획에 시간을 쏟지 않고 오로지 개발에만 집중할 수 있었다는 점이 
                좋았던 것 같습니다. 또한, 함께 개발하는 과정에서 여러 컨벤션들을 지키면서 개발을 하는 경험을 해볼 수 있어서 매우 유익했습니다.
                AppsCheck 는 실제로 Apps 동아리 내에서 사용하고자 만든 앱입니다. 실제로 내년 2024년에는 해당 앱을 사용해서 출석체크를 진행했으면 
                하는 바람이 있습니다. 팀원들과 함께 즐거운 시간을 보내며 성장할 수 있어서 정말 기쁩니다. 감사합니다.</span>
              </div>
            </S.ReviewCard>
          </S.twoContainer>
          <S.twoContainer>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>신진영 / Frontend </span><br /><br />
                <span style={{ lineHeight: '1.5'}}>첫 기획안을 제시한게 저였지만 개인적인 일정 조정이 어려워서 프로젝트에 제대로 참여하지 못한 것이 
                아쉽습니다. 하지만 앱스체크 마무리를 위해 겨울방학 일정을 조정해놨기 때문에 책임감을 가지고 개발해서 내년 앱스에서는 출석체크할때 
                꼭 이 앱을 사용해볼 수 있길 바라요 :) 저를 배려해주고 열심히 참여해준 채은이와 미성언니에게 너무 고맙다는 말을 꼭 남기고 싶습니다! 
                수고 많았고 감사해요💝</span>
              </div>
            </S.ReviewCard>
          </S.twoContainer>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;