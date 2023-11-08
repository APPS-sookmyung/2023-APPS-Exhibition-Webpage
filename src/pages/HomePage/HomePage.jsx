import {
  Header,
  PageLayout,
  MemberCard,
  StackCard,
  Footer,
  ProjectsSection,
} from '../../components';
import * as S from './HomePage.style';
import { useState, useRef, useEffect } from 'react';

import './HomePage.css';

const HomePage = () => {
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [inVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, [containerRef, options]);

    return [containerRef, inVisible];
  };

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <div>{isVisible ? 'visible' : 'invisible'}</div>
      <S.Container ref={containerRef}>
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
          <S.MessageSectionInner>
            <S.SectionTitle className="anim">
              {'APPS는 개인과 공동체를 위한\n도전을 멈추지 않습니다.'}
            </S.SectionTitle>
            <S.SectionDescription className="anim">
              프로젝트는 아래에서 확인할 수 있습니다.
            </S.SectionDescription>
          </S.MessageSectionInner>
        </S.MessageSection>

        <S.AboutAppsSection>
          <S.AboutAppsSectionInner>
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
