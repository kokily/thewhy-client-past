import React from 'react';
import PageHeader from '../common/PageHeader';

function Online() {
  return (
    <>
      <PageHeader title={'온라인 프로그램'} />

      <div className="container py-2 mb-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="font-weight-normal text-7 mb-2">
              <strong className="fontw-weight-extra-bold">라이브 클래스</strong>
            </h2>
            <p className="mb-0 lead">개발 진행 관련 내용 또는 약간의 설명글 포함</p>
          </div>
        </div>
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6">
            <div className="progress-bars mt-4">
              <div className="progress-label text-2">
                <span>
                  <strong>개발 진행율:</strong> 50%
                </span>
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar progress-bar-primary"
                  data-appear-progress-animation="50%"
                >
                  <span className="progress-bar-tooltip">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <img src="/img/online.png" alt="" className="img-fluid mt-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Online;
