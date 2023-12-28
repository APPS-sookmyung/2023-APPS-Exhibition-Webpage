import { useState } from 'react';
import * as S from './MemberCard.style';
import memberList from './MemberList';
import { sendClickEvent } from '../../services';

export default function MemberCard() {
  const [isHoveredCon1, setIsHoveredCon1] = useState(false);
  const [isHoveredCon2, setIsHoveredCon2] = useState(false);

  const handleCardClick = (name) => {
    sendClickEvent('CLICK_MEMBER_CARD', {
      name,
    });
  };

  return (
    <>
      <S.Container
        onMouseEnter={() => setIsHoveredCon1(true)}
        onMouseLeave={() => setIsHoveredCon1(false)}
      >
        <S.CardContainerOriginal1 isHovered={isHoveredCon1}>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index} href={member.github}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgContainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgContainer>
              <S.MemberInfo>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Name>{member.name}</S.Name>
                </S.InfoInner>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Major>{member.major}</S.Major>
                </S.InfoInner>
              </S.MemberInfo>
            </S.Card>
          ))}
        </S.CardContainerOriginal1>
        <S.CardContainerClone1 isHovered={isHoveredCon1}>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index} href={member.github} onClick={() => handleCardClick(member.name)}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgContainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgContainer>
              <S.MemberInfo>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Name>{member.name}</S.Name>
                </S.InfoInner>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Major>{member.major}</S.Major>
                </S.InfoInner>
              </S.MemberInfo>
            </S.Card>
          ))}
        </S.CardContainerClone1>
      </S.Container>
      <S.Container
        onMouseEnter={() => setIsHoveredCon2(true)}
        onMouseLeave={() => setIsHoveredCon2(false)}
      >
        <S.CardContainerOriginal2 isHovered={isHoveredCon2}>
          {memberList.slice(12, 26).map((member, index) => (
            <S.Card key={index} href={member.github}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgContainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgContainer>
              <S.MemberInfo>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Name>{member.name}</S.Name>
                </S.InfoInner>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Major>{member.major}</S.Major>
                </S.InfoInner>
              </S.MemberInfo>
            </S.Card>
          ))}
        </S.CardContainerOriginal2>
        <S.CardContainerClone2 isHovered={isHoveredCon2}>
          {memberList.slice(12, 26).map((member, index) => (
            <S.Card key={index} href={member.github}>
              <S.CrownContainer>
                {member.position !== null && <S.Crown src="/images/member/crown.png" alt="test" />}
              </S.CrownContainer>
              <S.ImgContainer style={{ position: 'relative', zIndex: 10 }} image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgContainer>
              <S.MemberInfo>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Name>{member.name}</S.Name>
                </S.InfoInner>
                <S.InfoInner style={{ position: 'relative', zIndex: 10 }}>
                  <S.Major>{member.major}</S.Major>
                </S.InfoInner>
              </S.MemberInfo>
            </S.Card>
          ))}
        </S.CardContainerClone2>
      </S.Container>
    </>
  );
}
