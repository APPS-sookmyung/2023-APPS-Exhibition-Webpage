import { useState } from 'react';
import * as S from './MemberCard.style';
import memberList from './MemberList';

export default function MemberCard() {
  const [isHoveredCon1, setIsHoveredCon1] = useState(false);
  const [isHoveredCon2, setIsHoveredCon2] = useState(false);

  return (
    <>
      <S.Container
        onMouseEnter={() => setIsHoveredCon1(true)}
        onMouseLeave={() => setIsHoveredCon1(false)}
      >
        <S.CardContainerOriginal1 isHovered={isHoveredCon1}>
          {memberList.slice(0, 13).map((member, index) => (
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
        </S.CardContainerOriginal1>
        <S.CardContainerClone1 isHovered={isHoveredCon1}>
          {memberList.slice(0, 13).map((member, index) => (
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
      <S.Container
        onMouseEnter={() => setIsHoveredCon2(true)}
        onMouseLeave={() => setIsHoveredCon2(false)}
      >
        <S.CardContainerOriginal2 isHovered={isHoveredCon2}>
          {memberList.slice(13, 26).map((member, index) => (
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
        <S.CardContainerClone2 isHovered={isHoveredCon2}>
          {memberList.slice(13, 26).map((member, index) => (
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
