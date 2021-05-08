import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserContent from './BrowserContent';
import MobileContent from './MobileContent';

const SecondTitle = styled.h4`
  color: ${oc.blue[5]};

  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 3px solid ${oc.blue[5]};
    margin: 20px auto;
  }
`;

function About() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <div className="post-image">
              <img className="img-fluid" src="/img/about/about.png" alt="About" />
            </div>
          </div>
        </div>
      </div>

      <BrowserView>
        <div className="container pt-5">
          <div className="row py-4 mb-2">
            <div className="col-md-7 order-2">
              <div className="overflow-hidden">
                <h2
                  className="mb-5 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible"
                  data-appear-animation="maskUp"
                  style={{
                    animationDelay: '300ms',
                    fontFamily: '윤고딕',
                    fontSize: '31px',
                    fontWeight: 600,
                    color: '#463884',
                  }}
                >
                  Why The Y
                </h2>
                <BrowserContent />
              </div>
            </div>

            <div
              className="col-md-5 order-md-2 mb-4 mb-lg-0 text-center align-self-center
            appear-animation animated fadeInRightShorter appear-animatino-visible
           "
              data-appear-animation="fadeInRightShorter"
              style={{ animationDelay: '100ms' }}
            >
              <img src="/img/about/about01.png" className="img-fluid" alt="about01" />
            </div>
          </div>
        </div>
      </BrowserView>

      <MobileView>
        <div className="container pt-5">
          <div className="row py-4 mb-2">
            <div className="col-md-7 order-2">
              <div className="overflow-hidden">
                <h2
                  className="mb-5 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible"
                  data-appear-animation="maskUp"
                  style={{
                    animationDelay: '300ms',
                    fontFamily: '윤고딕',
                    fontSize: '31px',
                    fontWeight: 600,
                    color: '#463884',
                  }}
                >
                  Why The Y
                </h2>
                <MobileContent />
              </div>
            </div>
          </div>
        </div>
      </MobileView>

      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <SecondTitle
              className="mb-5 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible text-center"
              data-appear-animation="maskUp"
              style={{
                animationDelay: '500ms',
                fontFamily: '윤고딕',
                fontSize: '31px',
                fontWeight: 600,
                color: '#463884',
              }}
            >
              더와이컨설팅이 가는 길
            </SecondTitle>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <div
              className="post-image"
              style={{
                maxWidth: '1110px',
              }}
            >
              <img className="img-fluid" src="/img/about/about02.png" alt="About02" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
