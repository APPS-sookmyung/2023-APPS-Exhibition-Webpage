import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage5.style';
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
        <S.ProjectName>새미새</S.ProjectName>
        <S.ProjectSummary>새 도감 사이트</S.ProjectSummary>

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
            <Link to="https://github.com/APPS-sookmyung/2023-BirdieBuddy">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-BirdieBuddy-server">
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
          한국의 탐조인들 모여라! 탐조의 즐거움이 배가 되는, 새에 미친 새람들을 위한 사이트입니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          - 도감
          <br /> 새 이름으로 검색하기
          <br /> 내가 발견한 새 특징으로 검색하기
          <br /> 새의 종 이름으로 검색하기
          <br /><br />
          - 동정
          <br /> 내가 동정 못하겠는 새 사진을 고수들에게 동정을 부탁하기
          <br /> 동정을 정확히 해주고 포인트 받기
          <br /><br />
          - 기록
          <br /> 내 탐조 여정을 기록해봐요!
          <br /> 내 탐조 여정을 확인해봐요!
          <br /><br />
          -새뉴스 (할지 말지 미정)
          <br /> 새들에 대한 뉴스를 접하기
          <br /> 새에 대해서 빠삭한 고수가 되어 봅시다.
          <br /><br />
          -배지
          <br /> 열심히 탐조활동 하라는 동기부여
          <br /> 탐조에 대한 달성과제를 완료하여 포인트를 얻기
          <br /><br />
          -마이페이지
          <br /> 모은 포인트로 내 아바타를 만들어봐요!
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
                <S.StackImage src="/images/stackIcon/VanillaJS.png" alt="Vanilla JS" />
                <S.StackDescription>Vanilla JS</S.StackDescription>
              </S.CircleForSpace>
            </S.CircleImage>
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>

        <S.DevDescription>
          <S.DevDescriptionTitle>개발자</S.DevDescriptionTitle>
          <S.ImageForSpace>
            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.MemberImage src="/images/member/정민주.png" />
                  <S.StackDescription>정민주</S.StackDescription>
                  <S.MemberDescription>Front-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/김진영.png" />
                <S.StackDescription>김진영</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/문채일.png" />
                <S.StackDescription>문채일</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            
            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/최민선.png" />
                <S.StackDescription>최민선</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>
        <S.ReviewTitle>팀 회고</S.ReviewTitle>
        <S.ReviewContainer>
          <S.twoContainer>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>정민주 / Frontend, 팀장</span><br /><br />
                <span style={{ lineHeight: '1.5'}}>처음 html 배울 때 그날 배운 개념 바로바로 실험 해보려고 만든 미니 프로젝트가 이렇게 커질 줄은 
                꿈에도 몰랐네요. 막판으로 이것저것 만들다가 어쩌다가 맨 처음에 만든 최초 페이지를 다시 한번 봤는데 와.... 뜯어 고치고 싶은 게 한 두 
                가지가 아니더라고요. 그 만큼 html css js 실력이 어느 정도 늘었다는 소리겠죠? 🤔
                내가 프런트 작업에 집중할 수 있게 도와준 백앤드 친구들아 도와줘서 고맙다~ 내가 프런트 공부 더 해 올 터이니 너도 나도 강해져서 다음 프로젝트에서 만나자!
                (그렇다고 이 프로젝트 바로 놓으면 안된다 우리 추가로 넣어야 하는 기능 엄청 많아😥)</span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>김진영 / Backend </span><br /><br />
                <span style={{ lineHeight: '1.5'}}>좋은 경험이었습니다.(임시)</span>
              </div>
            </S.ReviewCard>
          </S.twoContainer>
          <S.twoContainer>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>문채일 / Backend</span><br /><br />
                <span style={{ lineHeight: '1.5' }}>웹 개발 프로젝트에서 백엔드 기획과 개발 업무는 처음 해봤는데, 인텔리제이랑 스프링, 
                데이터베이스 다루는 데 많이 서툰 저를 같은 팀원들이 잘 이끌어줬습니다! 모두에게 고맙다는 말을 전하고 싶네요. 프로젝트 주제가 새여서 
                그런지, 평생 관심을 가져보지 않았던 새에 대한 흥미를 느끼게 되어서 신기하기도 합니다🪽🪽. 많이 바빴지만, 많은 도전이 있던 해였고, 
                여러 가지 경험을 하면서 큰 보폭의 성장을 이뤘다고 느껴지는 한 해였습니다! 언젠가 저희가 개발한 새미새 프로젝트를 출시해서 많은 한국 
                사람들이 해외 새 사이트인 ebird와 같이 우리나라의 새를 탐조하는 것에 대해 관심을 가지는 계기가 되었으면 좋겠습니다.🐦🐦내년에는 제 
                개발 능력이 더더욱 업그레이드되길 소망하고 🕊️🕊️ 프로젝트 무사히 마치고 모두 새처럼 날개를 달고 훨훨 날아오르시길 기원합니다.</span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>최민선 / Backend </span><br /><br />
                <span style={{ lineHeight: '1.5'}}>스프링 공부에 많은 도움이 되었습니다. 혼자 했으면 유니티로 줄행랑쳤을 것 같은데 
                팀원이랑 같이 하면서 꾸역꾸역하니까 스프링도 공부하게 된 것 같네요. 우리 새미새팀 사랑해❤️❤️</span>
              </div>
            </S.ReviewCard>
          </S.twoContainer>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;