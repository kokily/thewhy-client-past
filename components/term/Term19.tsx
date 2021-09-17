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

function Term19() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 19조 [광고게재 및 광고주와의 거래]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사가 회원에게 제공하는 서비스 투자기반의 일부는 광고게재를 통한 수익으로부터
            나옵니다. 회사는 서비스 운영과 관련하여 홈페이지, 서비스 화면, 전자우편 등에 광고를
            게재할 수 있고, 회원은 서비스 이용 시 노출되는 광고게재에 동의합니다.
          </li>
          <li className="mb-0">
            ② 회원이 서비스상에 게재되어 있는 광고를 이용하거나 서비스를 통한 광고주의 판촉활동에
            참여하는 등의 방법으로 교신 또는 거래를 하는 것은 전적으로 회원과 광고주 간의 문제이므로
            이로 인해 발생하는 손실과 손해에 대해 회사는 어떠한 책임도 지지 않습니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term19;
