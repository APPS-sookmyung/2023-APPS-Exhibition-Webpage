import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './MemberCard.style';
import memberList from './MemberList';
import 'slick-carousel/slick/slick.min';

export default class MemberCard extends Component {
  render() {
    const settings = {
      // 슬라이드 옵션들
      arrows: false, // 화살표 표시
      dots: true, // 밑에 현재 페이지와 나머지 페이지 점으로 표시
      infinite: true, // 무한 반복
      speed: 600, // 넘기는 속도
      slidesToShow: 5, // 슬라이드에 보여지는 아이템 개수
      slidesToScroll: 1, // 슬라이드 넘기는 아이템 개수
      autoplay: true, // 자동 재생
      autoplaySpeed: 20, // 자동 재생 속도
      fade: false,
    };

    return (
      <div>
        <Slider {...settings}>
          {memberList.slice(0, 12).map((member, index) => (
            <div key={index}>
              <S.Card>
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
            </div>
          ))}
        </Slider>
        <Slider {...settings}>
          {memberList.slice(13, 22).map((member, index) => (
            <div key={index}>
              <S.Card>
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
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
