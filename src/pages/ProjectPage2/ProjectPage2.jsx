import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage2.style';
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
        <S.ProjectName>POCHAK</S.ProjectName>
        <S.ProjectSummary>당신의 순간을 포착하세요!</S.ProjectSummary>

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
          Pochak은 사용자가 직접 사진을 올리는 것이 아니라, 친구들이 사용자를 중심으로 촬영한 사진을 통해 자연스럽게 일상을 기록하고 
          공유하는 특별한 소셜 미디어 플랫폼입니다. 다양한 시각에서의 일상을 통해 사용자들에게 새로운 경험을 제공합니다.
        </S.DevDescriptionDetail>

        <S.DevDescriptionTitle>기획의도</S.DevDescriptionTitle>
        <S.DevDescriptionDetail>
          📸 친구들의 시선으로 기록되다:
          <br />
          Pochak은 다른 사용자들이 당신의 일상을 기록하도록 하는 독특한 서비스입니다. 당신은 자신의 카메라를 통해 아름다운 순간들을 기록하지 않아도, 친구들이나 팔로워들이 당신을 찍은 사진을 피드에 올려 공유할 수 있습니다.
          <br /><br />
          🔄 상호 작용과 공유:
          <br />
          Pochak은 사용자들이 서로의 순간에 참여하고 상호 작용할 수 있도록 하는 기능을 강조합니다. 댓글, 좋아요, 그리고 공유를 통해 순간들을 더 특별하게 만들어보세요!
          <br /><br />
          🌟 프로필의 다양성:
          <br />
          당신의 Pochak 프로필은 다른 사람들이 기록한 당신의 순간들을 보여줍니다. 여러 시각으로부터의 사진들이 모여 하나의 아름다운 이야기를 만들어냅니다
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
                <S.StackImage src="/images/stackIcon/swift.png" alt="Swift" />
                <S.StackDescription>Swift</S.StackDescription>
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
                <S.MemberImage src="/images/member/서정연.png" />
                <S.StackDescription>서정연</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/장나리.png" />
                <S.StackDescription>장나리</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>

            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/황수연.png" />
                <S.StackDescription>황수연</S.StackDescription>
                <S.MemberDescription>Front-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CrownContainer>
                <S.CrownImage src="/images/member/crown.png" alt="Crown" />
                <S.CircleForSpace>
                  <S.MemberImage src="/images/member/김다연.png" />
                  <S.StackDescription>김다연</S.StackDescription>
                  <S.MemberDescription>Back-end</S.MemberDescription>
                </S.CircleForSpace>
              </S.CrownContainer>
            </S.CircleImage>
          </S.ImageForSpace>

          <S.ForSpace />

          <S.ImageForSpace>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/오지수.png" />
                <S.StackDescription>오지수</S.StackDescription>
                <S.MemberDescription>Back-end</S.MemberDescription>
              </S.CircleForSpace>
            </S.CircleImage>
            <S.CircleImage>
              <S.CircleForSpace>
                <S.MemberImage src="/images/member/하고은.png" />
                <S.StackDescription>하고은</S.StackDescription>
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
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>서정연 / Frontend</span><br /><br />
                <span style={{ lineHeight: '1.5'}}>좋은 경험이었습니다. (임시)</span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>황수연 / Frontend </span><br /><br />
                <span style={{ lineHeight: '1.5' }}>디자이너분들과 협업해보는 경험은 처음이었는데, 역시.. 전문가의 도움이 필요하다는 것을 절실히 
                느꼈습니다. 제대로 된 역할 분담.. 일이 그래도 순조롭게 돌아갈 수 있었던 것 같아요. iOS 파트로 참여하는 프로젝트는 처음인데, 
                생각보다 개발 환경이 까다로워서 정말 많은 우여곡절이 있었지만 같은 iOS 팀원들이 문제 생기면 항상 같이 해결해주어서 이보다 더는 
                든든할 수 없었습니다! 뿐만 아니라 팀원들 모두 능력있는 분들이라 아주 든든하고 더 다양한 것들을 볼 수 있어서 너무 좋았습니다. 
                실배포까지 열심히 달려보도록 하겠습니다.. </span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>오지수 / Backend </span><br /><br />
                <span style={{ lineHeight: '1.5' }}>DynamoDB를 처음 사용해 보았는데 정말 쉽지 않은 도전이었어요🥲 원테이블 설계에 도전하고, 
                AWS SDK, Spring Data Dynamodb를 사용하며 쿼리 하나 날리는 법까지 찾아봤던 과정은 시간은 비록 오래걸렸을지라도 서버팀원들의 성장에 큰 
                도움이 되었을 것 같아요! 앞으로 출시를 위해 다시 MySQL로 마이그레이션하자는 결정이 났지만 지금까지의 노력이 뒷받침되어 더 좋은 서비스를 
                출시할 수 있게 되리라 믿습니다!! 끊임없는 도전의 시간에 함께해준 우리 포착 팀원분들 너무 고마워요🫶🏻</span>
              </div>
            </S.ReviewCard>
          </S.twoContainer>
          <S.twoContainer>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>장나리 / Frontend </span><br /><br />
                <span style={{ lineHeight: '1.5'}}>iOS개발은 처음이었는데 앱스를 통해 다양한 경험을 해볼 수 있어서 좋았습니다!! 또, 직접 
                디자이너를 구해 디자이너와 협업하는 경험도 해보았습니다. 이를 통해 디자이너와 커뮤니케이션하는 방법도 배울 수 있었습니다. 
                POCHAK 프로젝트를 통해 새로운 경험을 많이 해볼 수 있었던 것 같습니다!!</span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>김다연 / Backend, 팀장</span><br /><br />
                <span style={{ lineHeight: '1.5' }}>처음으로 서버를 맡아 참여했던 프로젝트였습니다 :) 우리 팀원들과 회의하면서 새로운 
                아이디어들을 어떻게 구현하면 좋을지 고민하고, 또 지금까지 시도해보지 않았던 새로운 기술들을 배우고 적용하면서 더 많이 성장할 수 
                있었던것 같습니다. 또 서버 팀원들이 언제나 부족한 부분들을 도와주고 보충해줘서 처음 서버를 맡아 진행한 프로젝트임에도 많이 배우고 
                성장할 수 있었습니다..❤️‍🔥 혼자였다면 절대 이렇게 성장하지 못했을거에요 우리 팀원들 항상 도와주고 바보같은 질문들에도 답해줘서 
                고마웠구 앞으로도 잘부탁합니다 🧚🏻🤍 사랑해욥🤍🎄</span>
              </div>
            </S.ReviewCard>
            <S.ReviewCard>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>하고은 / Backend</span><br /><br />
                <span style={{ lineHeight: '1.5' }}> 다양한 기술을 사용해서 개발을 해볼 수 있는 기회였습니다. 좋은 팀원분들과 함께 프로젝트를 
                구상하고, 개발을 하면서 정말 많은 것을 배우고, 성장할 수 있었던 점이 가장 좋았던 것 같아요. 프로젝트를 하며 아낌없는 칭찬과 응원을
                 해주었던 팀원들이 있어서 든든했습니다. 즐겁게 개발했던 기억을 가지고 앞으로도 열심히 개발해보겠습니다!! 😊</span>
              </div>
            </S.ReviewCard>
          </S.twoContainer>
        </S.ReviewContainer>
      </S.Project>
    </PageLayout>
  );
};

export default ProjectPage;
