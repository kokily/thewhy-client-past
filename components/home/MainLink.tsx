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
      className="col-sm-6 col-lg-4 mb-4 mb-lg-0 appear-animation"
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
          <Card url="/" img="/img/main/main01.png" title="main01" sub="Main 01" />
          <Card url="/" img="/img/main/main02.png" title="main02" sub="Main 02" />
          <Card url="/" img="/img/main/main03.png" title="main03" sub="Main 03" />
        </div>
        <div className="row pb-4 mb-2">
          <Card url="/" img="/img/main/main04.png" title="main04" sub="Main 04" />
          <Card url="/" img="/img/main/main05.png" title="main05" sub="Main 05" />
          <Card url="/" img="/img/main/main06.png" title="main06" sub="Main 06" />
        </div>
      </div>
    </section>
  );
}

export default MainLink;
