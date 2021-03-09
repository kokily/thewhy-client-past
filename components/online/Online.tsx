import React from 'react';
import PageHeader from '../common/PageHeader';

function Online() {
  return (
    <>
      <PageHeader title={'온라인 프로그램'} />

      <div className="container py-2 mb-5">
        <div className="row">
          <div className="col-md-6 isotope-item brands">
            <div className="portfolio-item">
              <a href="/online">
                <span className="thumb-info thumb-info-lighten border-radius-0">
                  <span className="thumb-info-wrapper border-radius-0">
                    <img
                      src="/img/projects/project.jpg"
                      className="img-fluid border-radius-0"
                      alt=""
                    />

                    <span className="thumb-info-title">
                      <span className="thumb-info-inner">실시간 온라인 프로그램</span>
                      <span className="thumb-info-type">소개소개</span>
                    </span>
                    <span className="thumb-info-action">
                      <span className="thumb-info-action-icon bg-dark opacity-8">
                        <i className="fas fa-plus" />
                      </span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="col-md-6 isotope-item brands">
            <div className="portfolio-item">
              <a href="/online">
                <span className="thumb-info thumb-info-lighten border-radius-0">
                  <span className="thumb-info-wrapper border-radius-0">
                    <img
                      src="/img/projects/project.jpg"
                      className="img-fluid border-radius-0"
                      alt=""
                    />

                    <span className="thumb-info-title">
                      <span className="thumb-info-inner">VOD 프로그램</span>
                      <span className="thumb-info-type">소개소개</span>
                    </span>
                    <span className="thumb-info-action">
                      <span className="thumb-info-action-icon bg-dark opacity-8">
                        <i className="fas fa-plus" />
                      </span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Online;
