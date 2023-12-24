import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage.style';
import { Link } from 'react-router-dom';
import { Colors } from '../../theme';

import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';

const ProjectPage = () => {
  useEffect(() => {
    const reviewCards = document.querySelectorAll('.review-card');

    reviewCards.forEach((card, index) => {
      const content = card.querySelector('.review-content');
      if (content) {
        const contentHeight = content.offsetHeight;
        if (contentHeight > 150) {
          card.style.minHeight = `${contentHeight + 30}px`;
        }

        if (index > 0) {
          const prevCard = reviewCards[index - 1];
          const prevCardHeight = prevCard.offsetHeight;

          if (contentHeight < prevCardHeight) {
            const diff = prevCardHeight - contentHeight;
            prevCard.style.marginBottom = `${25 - diff}px`;
          }
        }
      }
    });
  }, []);
  return (
    <PageLayout
      header={<Header />}
      background={`linear-gradient(180deg, ${Colors.purple} 0%, #270F49 55.73%, #0D0D0D 100%)`}
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
        <S.ProjectName>Cookiee-</S.ProjectName>
        <S.ProjectSummary>하루하루의 쿠키를 모아보세요!</S.ProjectSummary>

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
                <S.Text style={{ lineHeight: '10px' }}>Link</S.Text>
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
                <S.Text style={{ lineHeight: '10px' }}>Download</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-COOKIEE-client-react">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Client</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>

          <S.StyledButton>
            <Link to="https://github.com/APPS-sookmyung/2023-COOKIEE-server">
              <S.IconTextWrapper>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333D4B' }} />
                <S.Text>Server</S.Text>
              </S.IconTextWrapper>
            </Link>
          </S.StyledButton>
        </S.ButtonContainer>

        <div style={{ width: '100%', borderTop: '2px solid #ffffff', margin: '40px 0' }}></div>

        <S.DevDescriptionTitle>서비스 소개</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          Cookiee- 앱으로 여러분의 하루하루를 아름답게 기록해보세요! 
          <br /> 사진으로 나만의 캘린더를 꾸미고, 그날 누구와 무엇을 했는지 기록하세요. 
          <br /> 일상을 캘린더로 디자인하는 색다른 경험을 누려보세요!
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기능 설명</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          🍪 캘린더로 한 달의 쿠키 모아보기
          <br /> 하루하루의 쿠키를 모아 한 달의 일상을 캘린더로 한눈에 보여줍니다.
          <br /><br /> 🍪 그 날의 쿠키 조각을 모아보기
          <br /> 하루동안의 쿠키 조각들을 보면서 누구와 어떤 시간을 보냈는지 리스트할 수 있습니다.
          <br /><br /> 🍪 카테고리 별 나의 일상 찾기
          <br />나의 쿠키들을 카테고리 별로 정리하여 한눈에 볼 수 있습니다.
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
                <S.StackImage src="/images/stackIcon/React.png" alt="React Native" />
                <S.StackDescription>React Native</S.StackDescription>
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

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/윤서희.png" />
                <S.StackDescription>윤서희</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/황수연.png" />
                <S.StackDescription>황수연</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.MemberImage src="/images/member/조영서.png" />
                  <S.StackDescription>조영서</S.StackDescription>
                  <S.MemberDescription>Back-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>
          </S.ImageForSpace>
        </S.DevDescription>
        <S.ForSpace></S.ForSpace>

        <S.ReviewTitle>팀 회고</S.ReviewTitle>
        <S.ReviewContainer>
          <S.ReviewCard className='review-card'>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>경민서 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', height: 'auto'}}>반갑습니다 반갑습니다 반갑습니다</span>
            </div>
          </S.ReviewCard>
          <S.ReviewCard className='review-card'>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>윤서희 / Frontend </span><br /><br />
              <span style={{ lineHeight: '1.5', height: 'auto'}}>기획부터 개발까지 정신없이 달려온 소중한 경험이었습니다 처음 접하는 프론트엔드라, 
              어려운 점도 많았고 개발이 더딘 부분도 있었는데 팀원들에게 조언을 구하고 소통을 계속 하면서 성공적으로 프로젝트를 마무리할 수 있었다고 
              생각해요! 1년이라는 시간동안 정말 열심히 개발한 쿠키팀, 그리고 앱스 모든 부원들 넘 고생 많았어요! 다들 사랑합니다</span>
            </div>
          </S.ReviewCard>
          <S.ReviewCard className='review-card'>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>조영서 / Backend </span><br /><br />
              <span style={{ lineHeight: '1.5' }}></span>
            </div>
          </S.ReviewCard>
          <S.ReviewCard>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>황수연 / Backend</span><br /><br />
              <span style={{ lineHeight: '1.5' }}></span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;
