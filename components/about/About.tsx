import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const SecondTitle = styled.h4`
  color: ${oc.blue[5]};

  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 3px solid ${oc.blue[5]};
    margin: 20px auto;
  }
`;

function About() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <div className="post-image">
              <img className="img-fluid" src="/img/about/about.png" alt="About" />
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row py-4 mb-2">
          <div className="col-md-9 order-2">
            <div className="overflow-hidden">
              <h2
                className="text-primary font-weight-bold text-8 mb-5 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible"
                data-appear-animation="maskUp"
                style={{ animationDelay: '300ms' }}
              >
                ABOUT US : 더와이컨설팅 소개
              </h2>
              <p
                className="lead appear-animation animated fadeInUpShorter appear-animation-visible text-6 line-height-4"
                data-appear-animation="fadeInUpShorter"
                style={{ animationDelay: '300ms' }}
              >
                더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다.
              </p>
              <p
                className="lead appear-animation animated fadeInUpShorter appear-animation-visible text-6 line-height-4"
                data-appear-animation="fadeInUpShorter"
                style={{ animationDelay: '320ms' }}
              >
                직장인의 꿈은 퇴사라고 하는데, 직장에서 행복을 꿈꾸기는 어려울까요?
                <br />
                직장에서 행복을 찾기 위해서는 어떤 요인들이 필요할까요?
              </p>
              <p
                className="lead appear-animation animated fadeInUpShorter appear-animation-visible text-6 line-height-4"
                data-appear-animation="fadeInUpShorter"
                style={{ animationDelay: '340ms' }}
              >
                다양한 요인들이 필요하겠지만
                <br />
                "내가 하는 일의 전문가"가 되어 인정받는 것.
                <br />
                함께 하는 "동료와의 행복한 관계"가
                <br />
                출근길의 발걸음을 조금 더 가볍게 만들지 않을까 생각합니다.
              </p>
              <p
                className="lead appear-animation animated fadeInUpShorter appear-animation-visible text-6 line-height-4"
                data-appear-animation="fadeInUpShorter"
                style={{ animationDelay: '360ms' }}
              >
                조직의 성장과 발전을 위해
                <br />
                역량을 갖춘 인재를 양성하고, 함께할 동료가 있다면
                <br />
                무엇이든 해낼 수 있으리라 봅니다.
              </p>
              <p
                className="lead appear-animation animated fadeInUpShorter appear-animation-visible text-6 line-height-4"
                data-appear-animation="fadeInUpShorter"
                style={{ animationDelay: '380ms' }}
              >
                결국 개인과 조직의 행복은 사람에 있다는 것을 믿으며,
                <br />
                더와이컨설팅은 고객이 행복해지는 순간을 연구하는
                <br />
                다양한 커뮤니케이션 프로그램을 연구하도록
                <br />
                하겠습니다.
              </p>

              <p
                className="pb-3 appear-animation animated fadeInUpShorter appear-animation-visible"
                data-appear-animation="fadeInUpShorter"
                style={{ animationDelay: '450ms' }}
              >
                주식회사 더와이컨설팅
                <br />
                MASTER Communicator 김영화
              </p>
            </div>
          </div>
          <div
            className="col-md-3 order-md-2 mb-4 mb-lg-0
            appear-animation animated fadeInRightShorter appear-animatino-visible
           "
            data-appear-animation="fadeInRightShorter"
            style={{ animationDelay: '100ms' }}
          >
            <img src="/img/about/about01.png" alt="about01" />
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <SecondTitle
              className="font-weight-bold text-8 mb-5 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible text-center"
              data-appear-animation="maskUp"
              style={{ animationDelay: '500ms' }}
            >
              더와이컨설팅이 가는 길
            </SecondTitle>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <div className="post-image">
              <img className="img-fluid" src="/img/about/about02.png" alt="About02" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
