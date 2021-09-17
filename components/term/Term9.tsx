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

function Term9() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 9조 [회원정보의 변경]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회원은 회사 웹사이트 "정보수정" 페이지에서 언제든지 자신의 개인정보를 열람하고 수정할
            수 있습니다.
          </li>
          <li className="mb-0">
            ② 회원이 전항의 변경사항을 수정하지 않아 발생한 불이익에 대하여 회사는 책임지지
            않습니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term9;
