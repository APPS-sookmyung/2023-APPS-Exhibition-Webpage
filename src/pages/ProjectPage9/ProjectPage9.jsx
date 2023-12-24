import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage9.style';
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
        <S.ProjectName>Basket</S.ProjectName>
        <S.ProjectSummary>사려고 한 모든 것들, bsaket에 저장!</S.ProjectSummary>

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
            <Link to="https://github.com/ljinny/2023-basket">
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
          공유한 쇼핑몰 링크만 넘쳐나는 사람들, 장 볼 때 필요한 식재료보다 다른 물품을 더 많이 사오는 사람들, 
          다이소만 가면 사려고 했던 물건이 기억 안나는 사람들을 위한 일상을 담아두는 생활 관리 서비스입니다!
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          basket은 옷, 음식, 생활용품까지 사려고 했던 모든 물건들을 저장하여 한 곳에서 정리 가능한 생활 관리 서비스입니다.
          <br /><br />
          👗 Clothes 페이지 - 패션을 담다, 나만의 옷장 관리하기
          <br />
          - 원하는 옷들의 사진과 링크를 업로드하여 저장 <br />
          - buy 버튼을 통해 해당 제품 페이지로 쉬운 이동 <br />
          - 구매하거나 옷이 마음에 안들 때 해당 제품을 삭제
          <br /><br />
          🍎 Grocery 페이지 - 건강한 식단을 위한 일상 기록하기 <br />
          - 일주일치의 식단 기록 <br />
          - 장 볼 목록 작성 및 관리
          <br /><br />
          🛒 Essential 페이지 - 생활 필수품을 체계적으로 관리하기 <br />
          - 상점의 종류에 따라 필요한 물품을 작성하여 저장 <br />
          - 구매 여부를 표시하여 물품 관리 용이
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
                <S.MemberImage src="/images/member/이지은.png" />
                <S.StackDescription>이지은</S.StackDescription>
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
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>이지은 / Frontend</span><br /><br />
              <span style={{ lineHeight: '1.5', width: '100%', height: 'auto' }}>
                웹의 다양한 기능을 경험해볼 수 있는 소중한 시간이었습니다. 웹의 디자인이 마음에 들지 않을 때, 
                원하는 기능을 구현하는 방법을 찾기 힘들 때 등 힘들었던 시간들도 있었지만 나만의 프로젝트를 하나 완성했다는 뿌듯함이 가장 기억에 남는 
                것 같습니다! 다음에는 다양한 팀원들과 더 완성도 있는 팀 프로젝트를 진행해보고 싶습니다!😄</span>
            </div>
          </S.ReviewCard>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;

