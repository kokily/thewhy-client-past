import React from 'react';

interface CardProps {
  url: string;
  img: string;
  title: string;
  sub: string;
}

function Card({ url, img, title, sub }: CardProps) {
  return (
    <div
      className="col-sm-6 col-lg-3 mb-4 mb-lg-0 appear-animation"
      data-appear-animation="fadeInRightShorter"
    >
      <span className="thumb-info thumb-info-hide-wrapper-bg bg-transparent border-radius-0">
        <span className="thumb-info-wrapper border-radius-0">
          <a href={url}>
            <img src={img} className="img-fluid border-radius-0" alt="" />
            <span className="thumb-info-title">
              <span className="thumb-info-inner">{title}</span>
              {sub && <span className="thumb-info-type">{sub}</span>}
            </span>
          </a>
        </span>
      </span>
    </div>
  );
}

function MainLink() {
  return (
    <section className="section section-default border-0 mt-0 pt-2 mb-0">
      <div className="container py-4">
        <div className="row">
          <div className="col pb-4 text-center">
            <h2 className="text-color-dark font-weight-normal text-7 mb-0 pt-2">
              <strong className="font-weight-extra-bold">주요 링크</strong>
            </h2>
          </div>
        </div>

        <div className="row pb-4 mb-2">
          <Card
            url="/question"
            img="/img/main_link1.png"
            title="교육문의"
            sub="050-5055-7221"
          />
          <Card
            url="/education"
            img="/img/main_link2.png"
            title="교육 프로그램"
            sub="서비스, 비즈니스 등"
          />
          <Card url="/online" img="/img/main_link3.png" title="온라인 프로그램" sub="VOD" />
          <Card
            url="/stories"
            img="/img/main_link4.png"
            title="The Y 이야기"
            sub="The Y 와 함께한 고객사, 교육내용"
          />
        </div>
      </div>
    </section>
  );
}

export default MainLink;
