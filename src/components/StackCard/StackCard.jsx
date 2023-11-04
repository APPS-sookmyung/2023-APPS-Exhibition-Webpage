import * as S from './StackCard.style';
// import * as MS from '../MemberCard/MemberCard.style';
import stackList from './StackList';

const StackCard = () => {
  return (
    <S.Container>
      <S.CardContainerOriginalStack>
        {stackList.slice(0, 18).map((stack, index) => (
          <S.Card key={index}>
            <S.ImgContainer style={{ position: 'relative', zIndex: 10 }} image={stack.stackImg} />
          </S.Card>
        ))}
      </S.CardContainerOriginalStack>
      <S.CardContainerCloneStack>
        {stackList.slice(0, 18).map((stack, index) => (
          <S.Card key={index}>
            <S.ImgContainer style={{ position: 'relative', zIndex: 10 }} image={stack.stackImg} />
          </S.Card>
        ))}
      </S.CardContainerCloneStack>
    </S.Container>
  );
};

export default StackCard;
