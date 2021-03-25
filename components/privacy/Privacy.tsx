import React from 'react';
import PageHeader from '../common/PageHeader';
import First from './pane/First';
import Fourth from './pane/Fourth';
import Second from './pane/Second';
import Third from './pane/Third';
import Fifth from './pane/Fifth';
import Sixth from './pane/Sixth';
import Seventh from './pane/Seventh';
import Eighth from './pane/Eighth';

function Privacy() {
  return (
    <>
      <PageHeader title={'개인정보 처리방침'} />

      <div className="container py-2 mb-4">
        <div className="row">
          <div className="col-lg-10 text-center">
            <p className="lead text-4">
              더와이컴퍼니는 이용자의 '동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며,
              이용자의 권리(개인정보 자기결정권)를 적극적으로 보장'하며, 대한민국의 개인정보보호
              규정 및 가이드라인을 준수하고 있습니다.
            </p>
            <p className="lead text-3">
              본 개인정보처리방침은 더와이컴퍼니 홈페이지 내 '교육문의'서비스 이용을 하고자 하는
              이용자(이하 '이용자')에 적용됩니다.
            </p>
          </div>
        </div>

        <hr />

        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eighth />
      </div>
    </>
  );
}

export default Privacy;
