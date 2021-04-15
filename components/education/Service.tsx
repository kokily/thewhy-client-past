import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const UL = styled.ul`
  border-top: 2px solid ${oc.indigo[7]};
  padding-top: 2rem;
`;

function Service() {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <div className="post-image">
            <img className="img-fluid" src="/img/education/edu01.png" alt="Service" />
          </div>
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
                <li>서비스 현장에서 대면/비대면으로 고객을 응대하는 고객사</li>
                <li>서비스역량을 높이고 싶은 개인 및 담당자</li>
                <li>현장의 서비스 응대능력을 평가하고 싶은 담당자</li>
                <li>더 나은 서비스질을 위해 고민하는 모든 분</li>
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
                <li>서비스 현장 경험 강사진</li>
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
                <li>서비스 마인드 향상</li>
                <li>서비스 역량 강화</li>
                <li>전화응대 역량 강화</li>
                <li>불만고객 응대</li>
                <li>서비스인의 이미지메이킹</li>
                <li>서비스 품질 모니터링</li>
                <li>서비스 매뉴얼 제작</li>
              </UL>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

