import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
  border-top: 2px solid #493586;
  padding-top: 1rem;

  li {
    line-height: 1.6;
  }
`;

function Leader() {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <div className="post-image">
            <img className="img-fluid" src="/img/education/edu03.png" alt="Leader" />
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-md-9">
          <h2
            className="mb-3 pt-0 mt-0"
            style={{
              fontFamily: '윤고딕330',
              fontSize: '26px',
              fontWeight: 600,
              color: '#493586',
            }}
          >
            리더 커뮤니케이션
          </h2>
          <p
            className="line-height-4"
            style={{
              fontFamily: '윤고딕320',
              fontSize: '20px',
              wordBreak: 'keep-all',
            }}
          >
            리더가 어떻게 말하느냐에 따라 조직의 성과, 문화를 좌우합니다. 하지만 커뮤니케이션의
            정답은 없습니다.
            <br />
            업무의 성격, 조직의 상황, 직원들의 성향, 리더의 성격 등의 영향을 받기 때문입니다.
            <br />
            조직의 성과와 효율적인 경영을 위해 리더의 커뮤니케이션에 대한 훈련 프로그램을
            제시합니다.
          </p>
        </div>
      </div>

      <div
        className="row mt-4 justify-content-center pt-5"
        style={{
          fontFamily: '윤고딕320',
          fontSize: '17px',
        }}
      >
        <div className="col-md-9">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="/img/education/target.png"
                style={{
                  maxWidth: '100px',
                }}
                alt="Target"
              />
            </div>
            <div className="col-md-8">
              <UL>
                <li>리더가 처음인 신임리더</li>
                <li>더 나은 리더가 되기를 고민하는 리더</li>
              </UL>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="/img/education/character.png"
                style={{
                  maxWidth: '100px',
                }}
                alt="Character"
              />
            </div>
            <div className="col-md-8">
              <UL>
                <li>사전 미팅을 통한 고객의 이슈 및 니즈 파악</li>
                <li>맞춤화된 프로그램 개발 및 반영</li>
                <li>사후 보고서 제출 (교육 결과물에 대한 피드백 필요시)</li>
              </UL>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="/img/education/program.png"
                style={{
                  maxWidth: '100px',
                }}
                alt="Program"
              />
            </div>
            <div className="col-md-8">
              <UL style={{ borderBottom: `2px solid #493586`, paddingBottom: '1rem' }}>
                <li>갈등관리</li>
                <li>리더의 회의법</li>
                <li>리더의 대화법</li>
              </UL>
            </div>
          </div>

          <img className="img-fluid mt-5 mb-5" src="/img/education/edu_footer.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Leader;