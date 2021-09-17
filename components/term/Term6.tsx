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

function Term6() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-2">제 2장 회원가입</h3>
        <h3 className="text-3 font-weight-bold mb-1">제 6조 [회원가입]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회원으로 가입하여 회사 서비스의 이용을 희망하는 자는 약관의 내용을 숙지한 후 동의함을
            표시하고, 회사가 제시하는 소정의 회원가입 양식에 관련사항을 기재하여 회원가입을
            신청하여야 합니다.
          </li>
          <li className="mb-0">
            ② 회사는 전항에 따라 회원이 온라인 회원가입 신청양식에 기재하는 모든 회원정보를 실제
            데이터인 것으로 간주합니다.
          </li>
          <li className="mb-0">
            ③ 실명이나 실제 정보를 입력하지 않은 회원은 법적인 보호를 받을 수 없으며, 본 약관의 관련
            규정에 따라 서비스 사용에 제한을 받을 수 있습니다.
          </li>
          <li className="mb-0">
            ④ 회사는 제1항에 따른 이용자의 신청에 대하여 회원가입을 승낙함을 원칙으로 합니다. 다만,
            회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수 있으며, 승낙 이후라도
            취소할 수 있습니다.
            <dl>
              <dt>1. 이용자의 귀책사유로 인하여 승인이 불가능한 경우</dt>
              <dt>2. 회원가입에 필수적으로 요구되는 정보의 제공을 거절한 경우</dt>
              <dt>3. 타인의 명의 및 정보로 개인정보를 도용하는 경우</dt>
              <dt>4. 허위의 정보를 제공하는 경우</dt>
              <dt>5. 중복된 아이디를 사용하는 경우</dt>
              <dt>6. 회사가 제시하는 회원가입 신청양식에 관련 내용을 기재하지 않은 경우</dt>
              <dt>7. 이전에 회사 이용약관 또는 관계법령을 위반하여 회원자격이 상실되었던 경우</dt>
              <dt>8. 기타 본 약관 및 관계법령을 위반하는 경우</dt>
              <dt>
                9. 회원가입 신청양식에 기재되어 회사에 제공되는 개인정보(ID, 비밀번호, 주소 등)가
                선량한 풍속 기타 사회질서에 위배되거나 타인을 모욕하는 경우
              </dt>
              <dt>
                10. 회사의 영업을 방해하거나 회사에 대하여 손해를 가하였거나, 그러한 목적으로
                회원가입을 신청하였다고 의심할 만한 사유가 있는 경우
              </dt>
              <dt>
                11. 영리목적으로 회원가입을 신청한 경우 12. 기타 물리적ㆍ기술적 사유로 회원가입을
                승낙할 수 없는 경우
              </dt>
            </dl>
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term6;
