import React from 'react';

function Ability() {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <div className="post-image">
            <img className="img-fluid" src="/img/education/edu05.png" alt="Ability" />
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
            직무역량강화
          </h2>
          <p
            className="line-height-4"
            style={{
              fontFamily: '윤고딕320',
              fontSize: '20px',
              wordBreak: 'keep-all',
            }}
          >
            직무분석은 직무의 역할을 분석하는 것입니다. 직무를 수행하면서 달성해야 하는 목표는
            무엇이며, 목표 달성 가능성을 높여주는 다양한 요인들을 찾는 과정입니다.
            <br />
            직무분석을 통해 직무수행자가 갖추어야 하는 역량은 무엇이며, 해당 역량을 갖추기 위한
            다양한 교육 프로그램이 도출됩니다.
            <br />
            직무분석을 통해 체계적인 교육훈련 프로그램을 도출하여 직무역량 강화에 꼭 필요한
            교육훈련을 제시합니다.
          </p>
        </div>
      </div>

      <div
        className="row mt-4 justify-content-center pt-5 mb-5"
        style={{
          fontFamily: '윤고딕320',
          fontSize: '17px',
        }}
      >
        <div className="col-md-9">
          <img className="img-fluid" src="/img/education/ability.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ability;
