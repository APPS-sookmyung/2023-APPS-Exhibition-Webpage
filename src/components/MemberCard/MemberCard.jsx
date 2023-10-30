import * as S from './MemberCard.style';
import memberList from './MemberList';

export default function MemberCard() {
  return (
    <>
      <S.Container>
        <S.CardContainerOriginal1>
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
        </S.CardContainerOriginal1>
        <S.CardContainerClone1>
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
        </S.CardContainerClone1>
      </S.Container>
      <S.Container>
        <S.CardContainerOriginal2>
          {memberList.slice(12, 23).map((member, index) => (
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
        </S.CardContainerOriginal2>
        <S.CardContainerClone2>
          {memberList.slice(12, 23).map((member, index) => (
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
        </S.CardContainerClone2>
      </S.Container>
    </>
  );
}
