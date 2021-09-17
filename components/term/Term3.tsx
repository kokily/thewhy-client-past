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

function Term3() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 3조 [회사 신원정보 등의 제공]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            회사는 회사의 상호, 대표자 성명, 주소, 대표전화, 팩스전송번호, 전자우편주소,
            사업자등록번호, 통신판매업 신고번호 등을 이용자가 쉽게 알 수 있도록 웹사이트 초기화면에
            게시합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term3;
