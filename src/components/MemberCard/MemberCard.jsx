import * as S from './MemberCard.style';
import * as CardContainerOriginal1 from './CardContainerOriginal1';
import memberList from './MemberList';

export default function MemberCard() {
  return (
    <>
      <S.Container>
        <CardContainerOriginal1.CardContainerOriginal1>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgConainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgConainer>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Name>{member.name}</S.Name>
              </S.InfoInner>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Major>{member.major}</S.Major>
              </S.InfoInner>
            </S.Card>
          ))}
        </CardContainerOriginal1.CardContainerOriginal1>
        <S.CardContainerClone1>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgConainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgConainer>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Name>{member.name}</S.Name>
              </S.InfoInner>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Major>{member.major}</S.Major>
              </S.InfoInner>
            </S.Card>
          ))}
        </S.CardContainerClone1>
      </S.Container>
      <S.Container>
        <S.CardContainerOriginal2>
          {memberList.slice(12, 23).map((member, index) => (
            <S.Card key={index}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgConainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgConainer>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Name>{member.name}</S.Name>
              </S.InfoInner>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Major>{member.major}</S.Major>
              </S.InfoInner>
            </S.Card>
          ))}
        </S.CardContainerOriginal2>
        <S.CardContainerClone2>
          {memberList.slice(12, 23).map((member, index) => (
            <S.Card key={index}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgConainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgConainer>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Name>{member.name}</S.Name>
              </S.InfoInner>
              <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                <S.Major>{member.major}</S.Major>
              </S.InfoInner>
            </S.Card>
          ))}
        </S.CardContainerClone2>
      </S.Container>
    </>
  );
}
