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

function Term5() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 5조 [약관과 기타 준칙]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 이 약관은 회사가 제공하는 개별서비스에 관한 이용안내(이하 서비스 별 안내라 함)와 함께
            적용됩니다.
          </li>
          <li className="mb-0">
            ② 본 약관에 명시되지 않은 사항에 대해서는 "약관의 규제에 관한 법률", "정보통신망
            이용촉진 및 정보보호 등에 관한 법률", "전자상거래 등에서의 소비자보호에 관한 법률" 및
            기타 관련법령의 규정에 따릅니다.
          </li>
          <li className="mb-0">
            ③ 회사는 ㈜더와이컨설팅을 구성하는 개별 서비스에 관하여 개별 약관 또는 정책을 운영할 수
            있습니다. 이 경우 개별 약관 또는 정책은 이 약관과 동일하게 회원에게 효력을 가지며 이
            약관과 상호 간에 모순이 있는 경우 개별 약관 또는 정책이 우선적으로 효력을 가집니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term5;
