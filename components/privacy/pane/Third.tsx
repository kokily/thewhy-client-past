import React from 'react';

function Third() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">3. 개인정보의 처리 및 보유기간</h3>
        <ul className="list list-icons list-primary">
          <li className="mb-1 ml-1">
            <i className="fas fa-check" />
            더와이컴퍼니는 이용자의 개인 정보를 목적 달성을 위한 기간 동안에만 제한적으로 처리하고
            있으며, 처리 목적이 달성되면 해당 이용자의 개인 정보의 경우는 별도로 저장 및 파기하고
            있습니다.
          </li>
          <li className="mb-1 ml-1">
            <i className="fas fa-check" />
            교육 문의에 따른 개인정보는 3개월간 보관하며, 이후 해당 정보는 지체없이 파기 됩니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Third;
