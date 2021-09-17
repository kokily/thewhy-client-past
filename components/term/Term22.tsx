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

function Term22() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">제 5장 유료 콘텐츠 서비스의 환불규정</h3>
        <h3 className="text-3 font-weight-bold mb-1">제 22조 [관계법령상 환불정책]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사의 본 약관상 환불규정 등은 "약관의 규제에 관한 법률", "전자상거래 등에서의
            소비자보호에 관한 법률", "평생교육법" 등을 반영하였으며 위 관계법령에 위배되는 부분이
            있는 경우 위 관계법령의 내용에 따릅니다.
          </li>
          <li className="mb-0">
            ② 회사는 회원에게 대금 등을 환불할 때는 원칙적으로 회원이 대금을 결제한 때와 동일한
            수단으로 환급합니다. 다만 동일한 수단으로 환급이 불가능할 경우에는 그 사유와 다른
            환급수단을 사전에 고지합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term22;
