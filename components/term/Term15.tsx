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

function Term15() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 15조 [교재의 구입 및 배송 등]</h3>

        <UL className="list list-primary">
          <li className="mb-0">① 교재 구입은 회사 웹사이트에서만 신청 가능합니다.</li>
          <li className="mb-0">
            ② 교재의 판매는 온라인 강좌를 수강 신청한 회원만을 대상으로 하고, 교재만 별도로
            판매하지는 아니합니다.
          </li>
          <li className="mb-0">
            ③ 교재는 회원의 구매결제가 완료된 시점으로부터 7일 이내에 배송하는 것을 원칙으로 하고
            있으며, 천재지변, 교재의 재고 부족 등으로 지연될 수 있습니다.
          </li>
          <li className="mb-0">
            ④ 파손, 파본, 배송오류 등의 문제가 발생할 경우 회사는 추가 배송비용 없이 재 발송하거나
            환불해 드립니다. 이때, 회원은 반드시 배송 받은 교재를 회사에 반송해야 합니다.
          </li>
          <li className="mb-0">
            ⑤ 전항에 해당하지 않는 교환, 환불의 경우 반환에 필요한 비용은 회원이 부담합니다.
          </li>
          <li className="mb-0">
            ⑥ 회원이 교재를 구매하는 경우, 회사는 개인정보취급방침에 따라 회원의 최소한의 개인정보를
            제3자(배송업체 등)에게 제공할 수 있습니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term15;
