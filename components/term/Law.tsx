import React from 'react';
import styled from 'styled-components';

// Styles
const UL = styled.ul`
  list-style: none;
  word-break: keep-all;

  li {
    margin-left: -20px;
  }

  dt {
    margin-left: 20px;
    font-weight: 300;
  }
`;

function Law() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">&lt;준거법 및 재판관할&gt;</h3>

        <UL className="list list-primary">
          <li className="mb-0">① 이 약관의 해석과 적용은 대한민국 법령에 의합니다.</li>
          <li className="mb-0">
            ② 회사와 회원 간에 분쟁이 발생한 경우 그 분쟁에 관한 재판관할은 「민사소송법」에
            의합니다. 다만, 회원이 외국에 거주하는 경우 대한민국 서울중앙지방법원을 제1심의 전속적
            관할법원으로 합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Law;
