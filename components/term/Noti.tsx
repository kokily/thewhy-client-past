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

function Noti() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">&lt;통지와 공고&gt;</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사는 이 약관에 따른 통지를 회원으로부터 제공받은 전자우편주소, 전화번호 등을 통하여
            전자적 방법으로 통지합니다.
          </li>
          <li className="mb-0">
            ② 회사는 불특정 다수의 회원을 대상으로 하는 통지를 갈음하여 ㈜더와이컨설팅에 1주 이상
            전자적 방법으로 공고할 수 있습니다. 다만, 회원의 서비스 이용과 관련하여 중대한 영향을
            미치는 사항은 개별적으로 통지합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Noti;
