import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

interface CardProps {
  url: string;
  img: string;
  title: string;
  sub: string;
  onClick: (menu: string) => void;
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

const CardTopImage = styled.img`
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: grayscale(80%);
    -webkit-filter: grayscale(80%);
  }
`;

function FlipCard({ url, img, title, sub, onClick }: CardProps) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card align-items-center">
        <CardTopImage className="card-img-top" src={img} alt={title} onClick={() => onClick(url)} />
        <div className="card-body pl-1 pr-1">
          <Title
            className="card-title text-center mb-2 pt-1"
            style={{
              fontFamily: '윤고딕340',
              fontSize: '23px',
              color: '#463884',
              fontStretch: '94%',
              lineHeight: '27.6pt',
              letterSpacing: '-1px',
            }}
          >
            {title}
          </Title>
          <p
            className="card-text"
            style={{
              textAlign: 'center',
              maxWidth: '297px',
              height: '52px',
              wordBreak: 'keep-all',
              fontFamily: '윤고딕310',
              fontSize: '19px',
              color: '#000000',
              lineHeight: '26px',
            }}
          >
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}

function MainLink() {
  const onMenu = (menu: string) => {
    document.location.href = `${menu}`;
  };

  return (
    <section
      className="section section-default border-0 mt-0 pt-2 mb-0"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col pb-4 text-center">
            <h2
              className="mb-2 pt-2"
              style={{
                fontFamily: '윤고딕',
                fontSize: '31px',
                color: '#463884',
              }}
            >
              교육 프로그램
            </h2>
            <p
              className="lead"
              style={{
                wordBreak: 'keep-all',
                fontFamily: '윤고딕',
                fontSize: '24px',
                color: '#808080',
              }}
            >
              더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.
            </p>
          </div>
        </div>

        <div className="row pb-4 mb-2">
          <FlipCard
            url="/education"
            img="/img/main/main01.png"
            title="서비스 커뮤니케이션"
            sub="서비스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램"
            onClick={onMenu}
          />
          <FlipCard
            url="/education/business"
            img="/img/main/main02.png"
            title="비즈니스 커뮤니케이션"
            sub="비즈니스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램"
            onClick={onMenu}
          />
          <FlipCard
            url="/education/leader"
            img="/img/main/main03.png"
            title="리더 커뮤니케이션"
            sub="조직의 성과와 효율적인 경영을 위한 리더의 커뮤니케이션 훈련 프로그램"
            onClick={onMenu}
          />
        </div>
        <div className="row pb-4 mb-2">
          <FlipCard
            url="/education/extended"
            img="/img/main/main04.png"
            title="Extended-DISC 커뮤니케이션"
            sub="개인, 팀, 조직의 소통 능력 활성화와 교육훈련을 위한 행동성향 분석 프로그램"
            onClick={onMenu}
          />
          <FlipCard
            url="/education"
            img="/img/main/main05.png"
            title="직무역량 강화 프로그램"
            sub="직무분석을 기반으로 직무역량 강화를 위한 교육훈련 프로그램"
            onClick={onMenu}
          />
          <FlipCard
            url="/education/online"
            img="/img/main/main06.png"
            title="온라인(On-Line) 프로그램"
            sub="실시간 또는 동영상 형태의 온라인 프로그램"
            onClick={onMenu}
          />
        </div>
      </div>
    </section>
  );
}

export default MainLink;
