import * as S from './MemberCard.style';
import memberList from './MemberList';
// import React, { useState, useEffect } from 'react';

export default function MemberCard() {
  // const [position, setPosition] = useState(0);

  // const moveInterval = 10;
  // const moveDirection = -1;

  // const visibleCards = Math.abs(5040 / window.innerWidth);

  // const endLine = Math.abs(window.innerWidth * (visibleCards - 1));

  // console.log('v ' + visibleCards);
  // console.log('e ' + endLine);

  // const updatePosition = () => {
  //   setPosition((prevPosition) => {
  //     if (prevPosition < -endLine) {
  //       return 0;
  //     }
  //     return prevPosition + (moveDirection * window.innerWidth) / 200;
  //   });
  // };

  // useEffect(() => {
  //   const timer = setInterval(updatePosition, moveInterval);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <>
      <S.Container
        style={
          {
            // transform: `translateX(${position}px)`,
          }
        }
      >
        <S.CardContainer>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index}>
              {member.position !== null && <S.Crown></S.Crown>}
              <S.ImgConainer image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgConainer>
              <S.InfoInner>
                <S.Name>{member.name}</S.Name>
              </S.InfoInner>
              <S.InfoInner>
                <S.Major>{member.major}</S.Major>
              </S.InfoInner>
            </S.Card>
          ))}
        </S.CardContainer>

        <S.CardContainer1>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index}>
              {member.position !== null && <S.Crown></S.Crown>}
              <S.ImgConainer image={member.memberImg}>
                {member.position !== null && <S.Position>{member.position}</S.Position>}
              </S.ImgConainer>
              <S.InfoInner>
                <S.Name>{member.name}</S.Name>
              </S.InfoInner>
              <S.InfoInner>
                <S.Major>{member.major}</S.Major>
              </S.InfoInner>
            </S.Card>
          ))}
        </S.CardContainer1>
      </S.Container>
    </>
  );
}
