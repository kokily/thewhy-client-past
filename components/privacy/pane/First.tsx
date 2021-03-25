import React from 'react';

function First() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">1. 처리하는 개인정보 항목</h3>
        <ul className="list list-icons list-primary">
          <li className="mb-0 ml-1">
            <i className="fas fa-check" />
            더와이컴퍼니는 최소한의 개인정보를 수집하여 처리하고 있습니다.
            <dl>
              <dt>가. 교육문의</dt>
              <dl>
                <dt style={{ marginLeft: '1rem' }}>필수항목: 이름, 비밀번호</dt>
                <dt style={{ marginLeft: '1rem' }}>선택항목: 이메일주소, 휴대폰 번호</dt>
              </dl>
            </dl>
          </li>

          <li className="mb-1 ml-1">
            <i className="fas fa-check" />
            더와이컴퍼니는 다음과 같은 방법으로 개인정보를 수집합니다.
            <dl>
              <dt>이용자의 입력방법</dt>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default First;
