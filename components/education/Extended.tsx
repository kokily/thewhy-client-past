import React from 'react';
import styled from 'styled-components';
import Logo from './svg/extended.svg';
import Footer from './svg/footer.svg';

const UL = styled.ul`
  border-top: 2px solid #493586;
  padding-top: 1rem;

  li {
    line-height: 1.6;
  }
`;

function Extended() {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <div className="post-image">
            <Logo />
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
            Extended-DISC 커뮤니케이션
          </h2>
          <p
            className="line-height-4"
            style={{
              fontFamily: '윤고딕320',
              fontSize: '20px',
              wordBreak: 'keep-all',
            }}
          >
            확장된 DISC 진단을 통해 조직 구성원 개인의 성향뿐만 아니라 조직의 성향을 분석합니다.
            <br />
            개인, 팀, 조직의 소통 능력 활성화 뿐만 아니라 채용, 배치, 교육훈련을 위한 기초 데이터를
            제공합니다.
            <br />※ Extended-DISC가 궁금하신 분, DISC의 성향 분석을 통한 교육 프로그램을 염두에 두고
            계시다면 문의하세요.
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
                <li>소통 및 조직 활성화에 이슈가 있는 조직</li>
                <li>개인의 행동성향 이해가 필요한 조직</li>
                <li>팀진단을 통해 팀을 효과적으로 운영하고 싶은 관리자</li>
                <li>조직에 맞는 인재상을 찾고 싶은 관리자</li>
                <li>개인의 이해를 통한 조직의 소통을 활성화하고 싶은 관리자</li>
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
                <li>DISC 진단을 통한 개인별, 팀별 리포트 제공</li>
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
                <li>개인 성향 진단</li>
                <li>팀 성향 진단</li>
                <li>팀&조직문화 진단</li>
                <li>DISC for 서비스 역량</li>
                <li>DISC for 세일즈 역량</li>
                <li>DISC for 리더의 역량</li>
              </UL>
            </div>
          </div>

          <Footer style={{ marginTop: '5rem', marginBottom: '5rem' }} />
        </div>
      </div>
    </div>
  );
}

export default Extended;
