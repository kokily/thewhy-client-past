import React from 'react';

function HeaderTop() {
  const LeftContent = (
    <div className="header-column justify-content-start w-50 order-md-1 d-none d-md-flex">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box feature-box-style-2 align-items-center">
              <div className="feature-box-info">
                <p className="pb-0 font-weight-semibold line-height-5 text-2">
                  커뮤니케이션 전문 교육컨설팅
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const CenterContent = (
    <div className="header-column justify-content-start justify-content-md-center order-1 order-md-2">
      <div className="header-row">
        <div className="header-logo">
          <a href="/">
            <img
              alt="Porto"
              width="100"
              height="48"
              data-sticky-width="82"
              data-sticky-height="40"
              src="/img/logo-default-slim.png"
            />
          </a>
        </div>
      </div>
    </div>
  );

  const RightContent = (
    <div className="header-column justify-content-end w-50 order-2 order-md-3">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box reverse-allres feature-box-style-2 align-items-center">
              <div className="feature-box-icon">
                <i className="fab fa-whatsapp text-7 p-relative" style={{ top: '-2px' }} />
              </div>
              <div className="feature-box-info">
                <p className="pb-0 font-weight-semibold line-height-5 text-2">
                  (050) 5055-7221
                  <br />
                  thewhycompany@naver.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="header-container container">
      <div className="header-row">
        {LeftContent}
        {CenterContent}
        {RightContent}
      </div>
    </div>
  );
}

export default HeaderTop;
