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
            <Link to="https://github.com/APPS-sookmyung/2023-POCHAK-ios">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-POCHAK-server">
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
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;