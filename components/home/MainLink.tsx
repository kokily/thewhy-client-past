import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

interface CardProps {
  url: string;
  img: string;
  title: string;
  sub: string;
}

const Title = styled.h4`
  &:before {
    content: '';
    display: block;
    border-top: 3px solid ${oc.blue[6]};
    width: 100px;
    margin: -20px auto 5px auto;
  }
`;

function FlipCard({ url, img, title, sub }: CardProps) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card flip-card align-items-center">
        <div className="flip-front p-0">
          <div className="flip-flip-content">
            <img className="card-img-top" src={img} alt={title} />
            <div className="card-body">
              <Title className="card-title text-center text-primary mb-1 text-5 font-weight-bold">
                {title}
              </Title>
              <p
                className="card-text text-4"
                style={{ textAlign: 'center', maxWidth: '297px', height: '52px' }}
              >
                {sub}
              </p>
            </div>
          </div>
        </div>
        <div
          className="flip-back d-flex p-5"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'luminosity',
          }}
        >
          <div className="flip-content my-4">
            <h4 className="font-weight-bold" style={{ color: `${oc.orange[9]}` }}>
              {title}
            </h4>
            <a
              href={url}
              className="btn btn-primary btn-modern text-color-light font-weight-bold text-4"
            >
              이동하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainLink() {
  return (
    <section
      className="section section-default border-0 mt-0 pt-2 mb-0"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col pb-4 text-center">
            <h2 className="text-color-dark font-weight-normal text-7 mb-0 pt-2">
              <strong className="font-weight-extra-bold text-primary">교육 프로그램</strong>
            </h2>
            <p className="lead">더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.</p>
          </div>
        </div>

        <div className="row pb-4 mb-2">
          <FlipCard
            url="/education"
            img="/img/main/main01.png"
            title="서비스 커뮤니케이션"
            sub="서비스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램"
          />
          <FlipCard
            url="/education/business"
            img="/img/main/main02.png"
            title="비즈니스 커뮤니케이션"
            sub="비즈니스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램"
          />
          <FlipCard
            url="/education/leader"
            img="/img/main/main03.png"
            title="리더 커뮤니케이션"
            sub="조직의 성과와 효율적인 경영을 위한 리더의 커뮤니케이션 훈련 프로그램"
          />
        </div>
        <div className="row pb-4 mb-2">
          <FlipCard
            url="/education/extended"
            img="/img/main/main04.png"
            title="Extended-DISC 커뮤니케이션"
            sub="개인, 팀, 조직의 소통 능력 활성화와 교육훈련을 위한 행동성향 분석 프로그램"
          />
          <FlipCard
            url="/education"
            img="/img/main/main05.png"
            title="직무역량 강화 프로그램"
            sub="직무분석을 기반으로 직무역량 강화를 위한 교육훈련 프로그램"
          />
          <FlipCard
            url="/education/online"
            img="/img/main/main06.png"
            title="온라인(On-Line) 프로그램"
            sub="실시간 또는 동영상 형태의 온라인 프로그램"
          />
        </div>
      </div>
    </section>
  );
}

export default MainLink;
