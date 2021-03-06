import React from 'react';

function Carousel() {
  const Slide1 = (
    <div
      className="position-relative"
      data-dynamic-height="['670px','670px','670px','550px','500px']"
      style={{
        backgroundImage: 'url(/img/slides/slide-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '670px',
      }}
    >
      <div className="position-absolute top-0 right-0 w-50pct w-lg-auto">
        <img
          src="/img/slides/slide-devices.jpg"
          className="w-100 appear-animation"
          data-appear-animation="fadeInLeftDownShorter"
          data-appear-animation-delay="500"
          alt=""
        />
      </div>
      <div className="position-absolute top-50pct left-0 transform3dy-n50 w-50pct w-lg-auto">
        <img
          src="/img/slides/slide-laptop.jpg"
          className="w-100 appear-animation"
          data-appear-animation="fadeInRightDownShorter"
          data-appear-animation-delay="1000"
          alt=""
        />
      </div>
      <div className="position-absolute transform3dy-n50">
        <img
          src="/img/slides/slide-parallax-porto-symbol.png"
          className="w-75 appear-animation"
          data-appear-animation="fadeInRightDownShorter"
          data-appear-animation-delay="1500"
          alt=""
          style={{ top: '20%', left: '-20%' }}
          data-plugin-options="{'forceAnimation': true}"
        />
      </div>

      <div className="container position-relative z-index-1 h-100">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h3
            className="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
            data-appear-animation="fadeInDownShorter"
            data-plugin-options="{'minWindowWidth': 0}"
          >
            <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
              <img
                src="/img/slides/slide-title-border.png"
                className="w-auto appear-animation"
                data-appear-animation="fadeInLeftShorter"
                data-appear-animation-delay="250"
                data-plugin-options="{'minWindowWidth': 0}"
                alt=""
              />
            </span>
            비즈니스, 서비스, 리더{' '}
            <span className="position-relative">
              의{' '}
              <span className="position-absolute left-50pct transform3dx-n50 top-0 mt-4">
                <img
                  src="/img/slides/slide-blue-line.png"
                  className="w-auto appear-animation"
                  data-appear-animation="fadeInLeftShorterPlus"
                  data-appear-animation-delay="1000"
                  data-plugin-options="{'minWindowWidth': 0}"
                  alt=""
                />
              </span>
            </span>
            <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
              <img
                src="/img/slides/slide-title-border.png"
                className="w-auto appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="250"
                data-plugin-options="{'minWindowWidth': 0}"
                alt=""
              />
            </span>
          </h3>
          <h1
            className="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
            data-appear-animation="blurIn"
            data-appear-animation-delay="500"
            data-plugin-options="{'minWindowWidth': 0}"
          >
            커뮤니케이션을
          </h1>
          <p
            className="text-4 text-color-light font-weight-light opacity-7 mb-0"
            data-plugin-animated-letters
            data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}"
          >
            연구합니다
          </p>
        </div>
      </div>
    </div>
  );

  const Slide2 = (
    <div
      className="position-relative overlay overlay-show overlay-op-8"
      data-dynamic-height="['670px','670px','670px','550px','500px']"
      style={{
        backgroundImage: 'url(/img/slides/slide-bg-2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '670px',
      }}
    >
      <div className="container position-relative z-index-3 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <h3
                className="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
                data-appear-animation="fadeInDownShorter"
                data-plugin-options="{'minWindowWidth': 0}"
              >
                <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                  <img
                    src="/img/slides/slide-title-border.png"
                    className="w-auto appear-animation"
                    data-appear-animation="fadeInLeftShorter"
                    data-appear-animation-delay="250"
                    data-plugin-options="{'minWindowWidth': 0}"
                    alt=""
                  />
                </span>
                행복한 관계
                <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                  <img
                    src="/img/slides/slide-title-border.png"
                    className="w-auto appear-animation"
                    data-appear-animation="fadeInRightShorter"
                    data-appear-animation-delay="250"
                    data-plugin-options="{'minWindowWidth': 0}"
                    alt=""
                  />
                </span>
              </h3>
              <h2
                className="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
                data-appear-animation="blurIn"
                data-appear-animation-delay="500"
                data-plugin-options="{'minWindowWidth': 0}"
              >
                더와이 컴퍼니의 길
              </h2>
              <p
                className="text-4 text-color-light font-weight-light opacity-7 text-center mb-0"
                data-plugin-animated-letters
                data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 30}"
              >
                &quot;사랑&quot;, &quot;희망&quot;, &quot;최선&quot;으로 흔들리지 않는 더와이
                컴퍼니가 될 것을 약속드립니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Slide3 = (
    <div
      className="position-relative overlay overlay-color-primary overlay-show overlay-op-8"
      data-dynamic-height="['670px','670px','670px','550px','500px']"
      style={{
        backgroundImage: 'url(/img/slides/slide-bg-6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '670px',
      }}
    >
      <div className="container position-relative z-index-3 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <h3
                className="position-relative text-color-light text-4 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
                data-appear-animation="fadeInDownShorter"
                data-plugin-options="{'minWindowWidth': 0}"
              >
                <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                  <img
                    src="/img/slides/slide-title-border.png"
                    className="w-auto appear-animation"
                    data-appear-animation="fadeInLeftShorter"
                    data-appear-animation-delay="250"
                    data-plugin-options="{'minWindowWidth': 0}"
                    alt=""
                  />
                </span>
                우리가 존재하는 이유는
                <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                  <img
                    src="/img/slides/slide-title-border.png"
                    className="w-auto appear-animation"
                    data-appear-animation="fadeInRightShorter"
                    data-appear-animation-delay="250"
                    data-plugin-options="{'minWindowWidth': 0}"
                    alt=""
                  />
                </span>
              </h3>
              <h2
                className="porto-middle-title text-color-light font-weight-extra-bold mb-3"
                data-plugin-animated-letters
                data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 300, 'animationName': 'fadeInRightShorterOpacity', 'letterClass': 'd-inline-block'}"
              >
                The Y Company
              </h2>
              <p
                className="text-4 text-color-light font-weight-light text-center mb-0"
                data-plugin-animated-letters
                data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0}"
              >
                &quot;행복한 관계&quot;를 꿈꾸는 것입니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="owl-carousel-wrapper position-relative" style={{ height: '670px' }}>
      <div className="owl-carousel-loader">
        <div className="bounce-loader">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>

      <div
        className="owl-carousel dots-inside dots-horizontal-center show-dots-hover nav-inside nav-inside-plus nav-dark nav-md nav-font-size-md show-nav-hover mb-0"
        data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 1}, '979': {'items': 1}, '1199': {'items': 1}}, 'loop': false, 'autoHeight': false, 'margin': 0, 'dots': true, 'dotsVerticalOffset': '-75px', 'nav': true, 'animateIn': 'fadeIn', 'animateOut': 'fadeOut', 'mouseDrag': false, 'touchDrag': false, 'pullDrag': false, 'autoplay': true, 'autoplayTimeout': 9000, 'autoplayHoverPause': true, 'rewind': true}"
      >
        {Slide1}
        {Slide2}
        {Slide3}
      </div>
    </div>
  );
}

export default Carousel;
