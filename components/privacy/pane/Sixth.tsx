import React from 'react';

function Sixth() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">6. 개인정보의 안전성 확보 조치</h3>
        <ul className="list list-icons list-primary">
          <li className="mb-0 ml-1">
            <i className="fas fa-check" />
            더와이컴퍼니는 이용자의 개인 정보를 가장 소중한 가치로 여기고 개인 정보를 처리함에
            있어서 다음과 같은 노력을 다하고 있습니다.
            <dl>
              <dt>가. 이용자의 개인정보를 암호화하고 있습니다.</dt>
              <dl>
                <dt style={{ marginLeft: '1rem' }}>
                  이용자의 개인 정보를 암호화된 통신구간을 이용하여 전송하고, 비밀번호 등 중요
                  정보는 암호화하여 보관하고 있습니다.
                </dt>
                <dt>나. 해킹이나 컴퓨터 바이러스로부터 보호하기 위해 노력하고 있습니다.</dt>
                <dt>
                  <dl style={{ margin: '0' }}>
                    <dt style={{ marginLeft: '1rem' }}>
                      해킹이나 컴퓨너 바이러스 등에 의해 이용자의 개인 정보가 유출되거나 훼손되는
                      것을 막기위해 지속적으로 확인·감시하고 있습니다.
                    </dt>
                  </dl>
                </dt>
                <dt>다. 소중한 개인 정보에 접근할 수 있는 사람을 최소화하고 있습니다.</dt>
                <dt>
                  라. 임직원에게 이용자의 개인 정보 보호에 대해 정기적인 교육을 실시하고 있습니다.
                </dt>
              </dl>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
}

/*
다. 소중한 개인정보에 접근할 수 있는 사람을 최소화하고 있습니다.
라. 임직원에게 이용자의 개인정보 보호에 대해 정기적인 교육을 실시하고 있습니다.
*/

export default Sixth;
