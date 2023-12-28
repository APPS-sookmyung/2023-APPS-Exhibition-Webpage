import * as S from './PageLayout.style';

const PageLayout = ({ header, footer, background = '#0D0D0D', className, children }) => {
  return (
    <S.Layout className={className} background={background}>
      {header}
      {children}
      {footer}
    </S.Layout>
  );
};

export default PageLayout;
