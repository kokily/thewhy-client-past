import React from 'react';
import styled from 'styled-components';

// Styles
const UL = styled.ul`
  list-style: none;

  li {
    margin-left: -20px;
    word-break: keep-all;
  }
`;

function Term1() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-2">제 1장 총칙</h3>
        <h3 className="text-3 font-weight-bold mb-1">제 1조 [목적]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            본 약관은 (주)더와이컨설팅(이하 '회사')가 이용고객(이하 '회원')간에 회사가 제공하는
            교육정보 서비스(이하 '서비스')의 가입조건 및 이용과 관련하여 회사와 회원 사이에
            권리˙의무 및 책임사항 등을 규정함을 목적으로 합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term1;
