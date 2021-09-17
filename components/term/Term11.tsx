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

function Term11() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 11조 [회원탈퇴 및 자격 상실 등]</h3>

        <UL className="list list-primary">
          <li className="mb-0">① 회원은 언제든지 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
          <li className="mb-0">
            ② 회사는 회원이 본 약관 또는 관계법령을 위반하는 경우, 서비스 이용을 제한하거나
            회원자격을 상실 시킬 수 있습니다. (회원이 회사에 대하여 이행하여야 하는 법률상 의무가
            존재하는 경우, 회원과 회사 사이에 분쟁이 발생하거나 발생할 가능성이 상당한 경우)
          </li>
          <li className="mb-0">
            ③ 본 조항에 따른 해지 시 회원은 이용계약 종료(회원 탈퇴) 이전에 사이버 머니, 포인트,
            할인 쿠폰은 소멸됩니다.
          </li>
          <li className="mb-0">
            ④ 회사는 회원탈퇴 시 회원으로부터 제공받은 정보를 관계 법령과 개인정보 처리방침 등에
            따라 삭제 또는 파기하거나 일정 기간 동안 보관합니다. 다만, 회원이 회원탈퇴 시까지 작성한
            게시물은 삭제되지 않으며 회원탈퇴 후 회사에 대하여 그 게시물의 삭제를 요구할 수
            없습니다.
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term11;
