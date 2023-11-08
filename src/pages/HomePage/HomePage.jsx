import {
  Header,
  PageLayout,
  MemberCard,
  StackCard,
  Footer,
  ProjectsSection,
} from '../../components';
import * as S from './HomePage.style';
import { useState, useEffect } from 'react';

import './HomePage.css';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

const HomePage = () => {
  const { y } = useScroll();

  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.Container>
        <S.MainSection>
          <S.MainSectionInner>
            <S.MainSectionTitle>
              Sookmyung APPS
              <br />
              Exhibition 2023
            </S.MainSectionTitle>
            <S.MainSectionSubTitle>Sookmyung Programming Club</S.MainSectionSubTitle>
          </S.MainSectionInner>
        </S.MainSection>

        <S.MessageSection>
          <S.MessageSectionInner className={y > 2000 ? 'scroll-text' : 'scrolled-text'}>
            <S.SectionTitle>
              {'APPS는 개인과 공동체를 위한\n도전을 멈추지 않습니다.'}
            </S.SectionTitle>
            <S.SectionDescription>프로젝트는 아래에서 확인할 수 있습니다.</S.SectionDescription>
          </S.MessageSectionInner>
        </S.MessageSection>

        <S.AboutAppsSection>
          <S.AboutAppsSectionInner className={y > 100 ? 'scroll-text' : 'scrolled-text'}>
            <S.SectionTitle className="anim">{'APPS 소개'}</S.SectionTitle>
            <S.SectionDescription className="anim">
              APPS는 모바일 앱&웹 프로그래밍 동아리로,
              <br /> 기술과 아이디어를 통해 프로젝트를 진행하며
              <br />
              개발 능력을 향상시키고 커뮤니티 내에서 성장합니다.
              <br />
              활발한 소통과 피드백을 통해 개인과 공동체 발전을 촉진합니다.
            </S.SectionDescription>
          </S.AboutAppsSectionInner>
        </S.AboutAppsSection>

        <S.MemberSection>
          <S.SectionSubTitle className="anim">{'멤버 소개'}</S.SectionSubTitle>
          <S.MemberCardSection className="anim">
            <MemberCard />
            <StackCard />
          </S.MemberCardSection>
        </S.MemberSection>

        <ProjectsSection />
      </S.Container>
    </PageLayout>
  );
};

export default HomePage;
