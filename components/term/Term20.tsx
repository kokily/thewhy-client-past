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

function Term20() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">제 4장 계약 해지 및 이용 제한</h3>
        <h3 className="text-3 font-weight-bold mb-1">제 20조 [계약 변경 및 해지]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 ㈜더와이컨설팅 서비스의 회원 가입
            변경메뉴를 이용해 가입 해지를 해야 합니다
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term20;
