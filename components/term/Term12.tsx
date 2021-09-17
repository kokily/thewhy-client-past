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

function Term12() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">제 3장 서비스 이용계약</h3>
        <h3 className="text-3 font-weight-bold mb-1">제 12조 [회사의 의무]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사는 특별한 사정이 없는 한 회원이 희망한 서비스 이용 개시일에 서비스를 제공하고
            계속적이고 안정적으로 서비스를 제공해야 합니다.
          </li>
          <li className="mb-0">
            ② 회사는 개인정보 보호를 위한 보안시스템을 구축하고 개인정보취급방침을 공시하고
            준수합니다.
          </li>
          <li className="mb-0">
            ③ 회사는 이용고객으로부터 제기되는 의견이나 불만이 정당하다고 인정될 경우 적절한 조치를
            취해야 하고, 즉시 처리하기 곤란한 경우에는 이용자에게 그 사유와 처리일정을 통보해야
            합니다.
          </li>
          <li className="mb-0">
            ④ 회사는 유료서비스의 구체적인 내용과 이용조건을 서비스 초기화면에 게시합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term12;
