import React from 'react';

function Eighth() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-4 font-weight-bold mb-1">8. 개인정보 보호책임자 등</h3>
        <ul className="list list-icons list-primary">
          <li className="mb-0 ml-1">
            <i className="fas fa-check" />
            홈페이지를 이용하시는 과정에서 개인정보보호 관련 문의, 불만, 조언이나 기타 사항은
            개인정보 보호책임자에게 연락 주시기 바랍니다.
            <dl>
              <dt>개인정보 보호책임자</dt>
              <dl>
                <dt style={{ marginLeft: '1rem' }}>책임자 : 김현성</dt>
                <dt style={{ marginLeft: '1rem' }}>전화 : 0000000</dt>
                <dt style={{ marginLeft: '1rem' }}>문의 : thewhycompany@naver.com</dt>
              </dl>

              <dt>
                개인정보가 침해되어 이에 대한 신고나 상담이 필요할 경우 아래 기관에 문의하셔서
                도움을 받으실 수 있습니다.
                <dl>
                  <dt style={{ marginLeft: '1rem' }}>
                    개인정보침해 신고센터 : (국번없이)118
                    <a href="https://privacy.kisa.or.kr" className="ml-2">
                      링크
                    </a>
                  </dt>
                  <dt style={{ marginLeft: '1rem' }}>
                    대검찰청 사이버수사과 : (국번없이)1301
                    <span className="ml-2">cid@spo.go.kr</span>
                  </dt>
                  <dt style={{ marginLeft: '1rem' }}>
                    경찰청 사이버안전국 : (국번없이)182
                    <a href="https://cyberbureau.police.go.kr" className="ml-2">
                      링크
                    </a>
                  </dt>
                </dl>
              </dt>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Eighth;
