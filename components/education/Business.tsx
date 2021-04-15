import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const UL = styled.ul`
  border-top: 2px solid ${oc.indigo[7]};
  padding-top: 2rem;
`;

function Business() {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <div className="post-image">
            <img className="img-fluid" src="/img/education/edu02.png" alt="Service" />
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-md-10">
          <h2 className="text-primary font-weight-bold text-8 mb-4 pt-0 mt-0">
            비즈니스 커뮤니케이션
          </h2>
          <p className="lead text-5 line-height-4 font-weight-bold">
            비즈니스 현장에서 발생되는 다양한 상황에 대한 교육 프로그램을 제시합니다.
            <br />
            사회생활이 처음인 신입사원에게 회사 생활에 대한 매너, 대화법 등 더 나은 비즈니스 역량을
            고민하는 고객사를 위한 프로그램을 제시합니다.
          </p>
        </div>
      </div>

      <div className="row mt-4 justify-content-center pt-5">
        <div className="col-md-8">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img src="/img/education/target.png" alt="Target" />
            </div>
            <div className="col-md-8">
              <UL>
                <li>직장생활이 처음인 신입사원</li>
                <li>더 나은 비즈니스 업무역량을 갖추고 싶은 경력사원</li>
                <li>비즈니스 역량 향상을 고민하는 고객사</li>
              </UL>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img src="/img/education/character.png" alt="Character" />
            </div>
            <div className="col-md-8 p-3">
              <UL>
                <li>사전 미팅을 통한 고객의 이슈 및 니즈 파악</li>
                <li>맞춤화된 프로그램 개발 및 반영</li>
                <li>사후 보고서 제출 (교육 결과물에 대한 피드백 필요시)</li>
              </UL>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img src="/img/education/program.png" alt="Program" />
            </div>
            <div className="col-md-8 p-3">
              <UL style={{ borderBottom: `2px solid ${oc.indigo[7]}`, paddingBottom: '2rem' }}>
                <li>보고서 작성법</li>
                <li>업무보고의 기술</li>
                <li>비즈니스 대화법</li>
                <li>비즈니스 매너 (비즈니스 복장 용모, 명함 수수 등)</li>
                <li>업무 매뉴얼 제작</li>
              </UL>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;

