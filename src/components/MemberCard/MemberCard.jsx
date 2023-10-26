import * as S from './MemberCard.style';
import memberList from './MemberList';

const MemberCard = () => {
  return (
    <S.Container>
      {memberList.map((member, index) => (
        <S.Card key={index}>
          <S.CardInner>
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
          </S.CardInner>
        </S.Card>
      ))}
    </S.Container>
  );
};

export default MemberCard;
