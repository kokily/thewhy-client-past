import React from 'react';

function EduFooter({ title }: { title: string }) {
  return (
    <div className="row pt-5 pb-5">
      <div className="col">
        <div className="alert alert-primary pt-4 pb-0" style={{ background: 'rgba(64,48,120,1)' }}>
          <img
            className="img-fluid float-left mr-2"
            src="/img/education/edu-footer.png"
            alt="Footer"
          />
          <p className="text-3 text-color-light">
            {title}과 관련한 구체적인 프로그램은 교육대상, 교육시간 별로 상이합니다.
            <br />
            구체적인 프로그램과 견적이 필요하신 분은 교육문의에 남겨 주시거나 아래 연락처로
            문의하시기 바랍니다.
            <br />
            이메일 thewhycompany@naver.com / 연락처 050-5055-7221
          </p>
        </div>
      </div>
    </div>
  );
}

export default EduFooter;