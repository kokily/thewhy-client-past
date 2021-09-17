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

function Term10() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">
          제 10조 [회원의 ‘아이디’ 및 ‘비밀번호’의 관리에 대한 의무]
        </h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회원은 아이디와 비밀번호에 대한 관리책임이 있으며, 이를 타인에게 공개하여 제3자가
            이용하도록 하여서는 안됩니다.
          </li>
          <li className="mb-0">
            ② 회원은 자신의 아이디 및 비밀번호가 유출되어 제3자에 의해 사용되고 있음을 인지한 경우,
            즉시 회사에 알려야 합니다.
          </li>
          <li className="mb-0">
            ③ 회사는 전항의 경우 회원의 개인정보보호 및 기타 서비스 부정이용행위 방지 등을 위하여
            회원에게 비밀번호의 변경 등 필요한 조치를 요구할 수 있으며, 회원은 회사의 요구가 있는
            즉시 회사의 요청에 성실히 응해야 합니다.
          </li>
          <li className="mb-0">
            ④ 회사는 회원이 본 조 제2항 및 제3항에 따른 의무를 성실히 이행하지 않아 발생한 불이익에
            대하여 책임지지 않습니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term10;
