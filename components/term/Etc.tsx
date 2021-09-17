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

function Etc() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">.기타.</h3>
        <h3 className="text-3 font-weight-bold mb-1">&lt;회사의 책임과 면책&gt;</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사의 귀책사유로 인하여 회원이 손해를 입은 경우 회사는 회원에게 손해를 배상합니다.
            다만, 손해배상은 회원이 실제로 입은 손해를 한도로 합니다.
          </li>
          <li className="mb-0">
            ② 회사가 통신판매중개를 하는 경우 회사는 통신판매의 당사자가 아니며 회사는 회원과
            통신판매중개의뢰자 간의 거래에 대하여 책임을 부담하지 아니합니다. 다만, 회사는 회원에게
            「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 통신판매 중개 의뢰자에 관한 정보를
            제공합니다.
          </li>
          <li className="mb-0">
            ③ 회사는 서비스의 적법성, 정확성, 진실성, 신뢰성, 유효성 등을 보증하지 아니합니다.
          </li>
          <li className="mb-0">
            ④ 회사는 회원에게 유료 또는 무료로 제공하는 상품에 대하여 「제조물 책임법」에 따른
            제조물 책임을 부담하지 아니합니다. 다만, 회원이 회사에게 상품의 제조업자 또는 공급한
            자에 관한 정보를 요청하는 경우 회사는 상당한 기간 내에 그 정보를 회원에게 제공합니다.
          </li>
          <li className="mb-0">
            ⑤ 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에 따라 회원정보를 포함한
            ㈜더와이컨설팅 데이터 일체에 관하여 보안에 필요한 기술적 조치를 취하고 있습니다. 다만,
            회사는 위와 같은 기술적 조치에도 불구하고 제3자가 해킹, 컴퓨터바이러스 등의 방법으로
            회사의 정보통신망 또는 이와 관련된 정보시스템을 공격하는 행위를 하여 발생한 사태로
            인하여 회원에게 발생한 손해에 대하여는 책임을 부담하지 아니합니다.
          </li>
          <li className="mb-0">
            ⑥ 회사는 ㈜더와이컨설팅을 구성하는 데이터의 무결성을 보증하지 아니합니다
          </li>
          <li className="mb-0">
            ⑦ 회사는 아래의 어느 하나에 해당하는 경우에 대하여서는 책임을 부담하지 않습니다.
            <dl>
              <dt>· 회원의 귀책사유에 의하여 발생한 손해</dt>
              <dt>· 회사의 귀책사유 또는 구체적인 피해사실이 증명되지 않은 손해</dt>
              <dt>
                · 회사가 통신판매중개자로서 중개한 거래에서 통신판매자와 회원 간에 발생한 분쟁과
                관련한 손해
              </dt>
              <dt>· 서비스의 적법성, 정확성, 진실성, 신뢰성, 유효성 등과 관련하여 발생한 손해</dt>
              <dt>· 회원에게 공급된 상품에 관한 「제조물 책임법」상의 제조물 책임과 관련한 손해</dt>
              <dt>
                · 천재지변, 쟁의행위, 감염병 등 회사가 통제하기 어려운 사정으로 인하여 발생한 손해
              </dt>
              <dt>· 회원 간 또는 크리에이터와 회원 간의 분쟁으로 인하여 발생한 손해</dt>
            </dl>
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Etc;