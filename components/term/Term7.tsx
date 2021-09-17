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

function Term7() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 7조 [서비스의 제공 및 변경]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사는 회원에게 아래와 같은 서비스를 제공합니다.
            <dl>
              <dt>1. 회원을 위한 온라인교육 컨텐츠 서비스, 맞춤 서비스</dt>
              <dt>
                2. 회사는 변경될 서비스의 내용 및 제공일자를 ㈜더와이컨설팅 서비스를 통해 공지하고
                서비스를 변경하여 제공할 수 있습니다.
              </dt>
            </dl>
          </li>
          <li className="mb-0">
            ② 회사는 전항에 따라 회원이 온라인 회원가입 신청양식에 기재하는 모든 회원정보를 실제
            데이터인 것으로 간주합니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term7;
