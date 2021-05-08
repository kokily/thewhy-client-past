import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
  border-top: 2px solid #493586;
  padding-top: 1rem;

  line-height: 1.6;
  padding-left: 0;
  padding-right: 2rem;
`;

function Online() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <div className="post-image">
              <img className="img-fluid" src="/img/education/online.png" alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-md-9">
            <h2
              className="mb-3 pt-0 mt-0"
              style={{
                fontFamily: '윤고딕',
                fontSize: '26px',
                fontWeight: 600,
                color: '#493586',
              }}
            >
              온라인(On-Line) 프로그램
            </h2>
            <p
              className="line-height-4"
              style={{
                fontFamily: '윤고딕',
                fontSize: '20px',
                wordBreak: 'keep-all',
              }}
            >
              실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램을 개발하고 진행 가능합니다.
              <br />
              언제 어디서든 장소의 제약 없이 우리의 행복한 성장을 원하는 곳에 더와이컨설팅이 온라인
              교육을 진행합니다.
            </p>
          </div>
        </div>

        <div
          className="row mt-4 justify-content-center pt-5"
          style={{
            fontFamily: '윤고딕',
            fontSize: '17px',
          }}
        >
          <div className="col-md-9">
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src="/img/education/online01.png"
                  style={{
                    maxWidth: '100px',
                    paddingBottom: '1rem',
                  }}
                  alt="Online01"
                />
              </div>
              <div className="col-md-8">
                <UL>
                  줌 (ZOOM), 웹엑스(Webex) 등 익히 알려진 실시간 형태의
                  <br /> 온라인 교육이 가능합니다.
                </UL>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src="/img/education/online02.png"
                  style={{ maxWidth: '130px', paddingBottom: '1rem' }}
                  alt="Online02"
                />
              </div>
              <div className="col-md-8">
                <UL
                  style={{
                    borderBottom: '2px solid #493586',
                    paddingBottom: '1rem',
                  }}
                >
                  고객사의 요구 사항에 따라 동영상 형태의 교육 프로그램을
                  <br />
                  개발, 운영합니다.
                </UL>
              </div>
            </div>

            <img className="img-fluid mt-5 mb-5" src="/img/education/edu_footer.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Online;
