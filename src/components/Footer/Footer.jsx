import * as S from './Footer.style';

const FOOTER_INFO_LIST = [
  {
    title: '개발 & 디자인',
    contentList: [
      '경민서 (소프트웨어융합 22)',
      '류미성 (컴퓨터과학 21)',
      '윤서희 (소프트웨어융합 21)',
    ],
  },
  {
    title: 'APPS',
    contentList: ['숙명여자대학교', '04310 서울특별시 용산구 청파로47길 100(청파동2가)'],
  },
];

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInner>
        <S.InfoList>
          {FOOTER_INFO_LIST.map(({ title, contentList }) => (
            <S.InfoItem key={title}>
              <S.InfoTitle>{title}</S.InfoTitle>
              <S.InfoContentList>
                {contentList.map((content) => (
                  <S.InfoContentItem key={content}>
                    <S.InfoContent>{content}</S.InfoContent>
                  </S.InfoContentItem>
                ))}
              </S.InfoContentList>
            </S.InfoItem>
          ))}
        </S.InfoList>
        <S.Copyright>Copyright ⓒ APPS. All Rights Reserved.</S.Copyright>
      </S.FooterInner>
    </S.Footer>
  );
};

export default Footer;
