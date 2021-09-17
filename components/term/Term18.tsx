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

function Term18() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 18조 [정보의 제공]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사는 서비스를 운영함에 있어 각종 정보를 서비스 화면에 게재하거나 전자우편이나
            서신우편 등의 방법으로 회원에게 제공할 수 있습니다.
          </li>
          <li className="mb-0">
            ② 회사는 서비스 개선 및 회원 대상의 서비스 소개 등의 목적으로 회원의 동의 하에 추가적인
            개인 정보를 요구할 수 있습니다
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term18;
