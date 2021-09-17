import React from 'react';
import styled from 'styled-components';
import useMedia from '../../../libs/hooks/useMedia';

const Pane = styled.p`
  strong {
    color: #a1a1a1;
  }
`;

function FooterCopyright() {
  const isSmall = useMedia(`(max-width: 992px)`);

  return (
    <div className="footer-copyright">
      <div className="container py-2">
        <div className="row py-4">
          <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
            <a href="/" className="logo pr-0 pr-lg-3">
              <img src="/img/logo2.png" className="opacity-5" height="32" />
            </a>
          </div>

          <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
            {isSmall ? (
              <>
                <Pane>
                  Copyright(c) 2021. All RightReserved.
                  <br />
                  <strong>사업자등록번호</strong> 640-88-02162
                  <br />
                  <strong>통신판매업신고</strong> 제2021-다산-0477
                </Pane>
              </>
            ) : (
              <Pane>
                Copyright(c) 2021. All Right Reserved. <strong>사업자등록번호</strong> 640-88-02162
                |&nbsp;
                <strong>통신판매업신고</strong> 제2021-다산-0477
              </Pane>
            )}
          </div>

          <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
            <nav id="sub-menu">
              <ul>
                <li>
                  <i className="fas fa-angle-right" />
                  <a href="/faq" className="ml-1 text-decoration-none">
                    {' '}
                    FAQ's
                  </a>
                </li>
                <li>
                  <i className="fas fa-angle-right" />
                  <a href="/term" className="ml-1 text-decoration-none">
                    {' '}
                    이용약관
                  </a>
                </li>
                <li>
                  <i className="fas fa-angle-right" />
                  <a href="/privacy" className="ml-1 text-decoration-none">
                    {' '}
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCopyright;
