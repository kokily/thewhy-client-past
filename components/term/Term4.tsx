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

function Term4() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 4조 [약관의 효력 및 변경]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 이 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.
          </li>
          <li className="mb-0">
            ② 이 약관은 회사의 웹사이트(thewhy.kr 이하 '더와이컨설팅 서비스')에 온라인으로
            공시됨으로써 효력이 발생되고, 합리적인 사유가 발생할 경우 회사는 관계법령에 위배되지
            않는 범위에서 이 약관을 변경할 수 있습니다.
          </li>
          <li className="mb-0">
            ③ 개정약관도 ㈜더와이컨설팅 서비스에 온라인으로 공시됨으로써 효력이 발생됩니다. 회사는
            약관을 변경할 경우 지체 없이 이를 공시하여야 하고, 회원의 권리나 의무 등에 관한
            중요사항을 개정할 경우에는 사전에 공시하여야 합니다. 회사가 이 약관을 개정하는 경우
            회원에게 주요 개정내용과 시행일 등을 명시하여 시행일로부터 7일 전에 전자적 방법으로
            알려드리겠습니다. 다만, 회원에게 불리한 내용이 포함되는 경우 시행일로부터 30일 전에
            알려드리겠습니다
          </li>
          <li className="mb-0">
            ④ 이 약관에 동의하는 것은 정기적으로 ㈜더와이컨설팅을 방문하여 약관의 변경사항을
            확인하는 것에 동의함을 의미합니다. 변경된 약관을 알지 못해 발생하는 이용자의 피해는
            회사에서 책임지지 않습니다.
          </li>
          <li className="mb-0">
            ⑤ 약관에 동의하지 않는 회원은 탈퇴(해지)를 요청할 수 있으며, 약관의 효력이 발생된
            날로부터 7일 이후까지 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우는 약관에
            동의한 것으로 간주됩니다. 다만, 회원이 개정 약관에 동의하지 않는 경우 회원탈퇴절차가
            진행될 수 있습니다.
          </li>
          <li className="mb-0">
            ⑥ 이 약관에 명시되지 않은 사항은 「약관의 규제에 관한 법률」, 「전자상거래 등에서의
            소비자보호에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
            「콘텐츠산업 진흥법」 등 관계 법령과 개인정보 처리방침 등 지침 등에 의합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term4;
