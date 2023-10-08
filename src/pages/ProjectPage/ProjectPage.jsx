import { PageLayout, Header } from '../../components';
import * as S from './ProjectPage.style';

const ProjectPage = () => {
  return (
    <PageLayout
      header={<Header />}
      background="linear-gradient(180deg, #351068 0%, #270F49 55.73%, #0D0D0D 100%)"
    >
      <S.Container>도입 화면 페이지</S.Container>
    </PageLayout>
  );
};

export default ProjectPage;
