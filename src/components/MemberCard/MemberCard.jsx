import * as S from './MemberCard.style';
import memberList from './MemberList';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useAnimation,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 100, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 300);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function MemberCard() {
  const cardAnimation = useAnimation();

  // useEffect(() => {
  //   const infiniteScroll = async () => {
  //     // eslint-disable-next-line no-constant-condition
  //     while (true) {
  //       await cardAnimation.start({ x: -100 }); // 카드 왼쪽으로 이동
  //       await cardAnimation.start({ x: 0, transition: { duration: 0 } }); // 순간 이동
  //     }
  //   };

  //   infiniteScroll();
  // }, [cardAnimation]);

  return (
    <>
      <ParallaxText baseVelocity={5}>
        <S.Container>
          {memberList.slice(0, 12).map((member, index) => (
            <S.Card key={index} animate={cardAnimation}>
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
      </ParallaxText>
    </>
  );
}
