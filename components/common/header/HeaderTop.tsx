import React from 'react';
import styled from 'styled-components';
import NaverIcon from '../NaverIcon';
import Logo from './Logo.svg';

const RightContentBox = styled.div`
  @media screen and (max-width: 765px) {
    display: none !important;
  }
`;

function HeaderTop() {
  const LeftContent = () => (
    <div className="header-column justify-content-start w-50 order-md-1 d-none d-md-flex">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box feature-box-style-2 align-items-center">
              <div className="feature-box-info">
                <p className="pb-0 font-weight-semibold line-height-5 text-2">
                  커뮤니케이션 전문 교육컨설팅
                </p>
                <ul className="social-icons mt-2 text-center">
                  <li className="social-icons-youtube ml-0">
                    <a href="https://www.youtube.com/channel/UCggECPaCiuurAttkyNdWWDg/featured">
                      <i className="fab fa-youtube text-2" />
                    </a>
                  </li>
                  <li className="ml-2">
                    <NaverIcon href="https://blog.naver.com/thewhycompany" />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const CenterLogo = styled.div`
    justify-content: center !important;
  `;

  const CenterContent = () => (
    <div className="header-column justify-content-start justify-content-md-center order-1 order-md-2">
      <CenterLogo className="header-row">
        <div className="header-logo">
          <a href="/">
            <Logo width={200} height={96} />
          </a>
        </div>
      </CenterLogo>
    </div>
  );

  const RightContent = () => (
    <RightContentBox className="header-column justify-content-end w-50 order-2 order-md-3">
      <div className="header-row">
        <ul className="header-extra-info">
          <li className="m-0">
            <div className="feature-box reverse-allres feature-box-style-2 align-items-center">
              <div className="feature-box-icon">
                <i
                  className="fab fa-whatsapp text-7 p-relative"
                  style={{ top: '-2px', color: '#463884' }}
                />
              </div>
              <div className="feature-box-info">
                <p
                  className="pb-0 font-weight-semibold line-height-5 text-2"
                  style={{
                    fontFamily: 'helvetica serif',
                  }}
                >
                  050-5055-7221
                  <br />
                  thewhy@thewhy.kr
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </RightContentBox>
  );

  return (
    <div className="header-container container">
      <div className="header-row">
        <LeftContent />
        <CenterContent />
        <RightContent />
      </div>
    </div>
  );
}

export default HeaderTop;
