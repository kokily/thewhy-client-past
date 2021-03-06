import React from 'react';

function About() {
  const Title = (
    <div className="row pb-5 ">
      <div className="col-md-9 mx-md-auto">
        <div className="overflow-hidden mb-5">
          <h1
            className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation text-center"
            data-appear-animation="maskUp"
          >
            <span>더와이컴퍼니는 행복한 삶을 꿈꾸는</span>
            <br />
            <span className="word-rotator-words bg-primary">
              <b className="is-visible">커뮤니케이션</b>
              <b>커뮤니케이션</b>
            </span>
            <span>전문 교육 컨설팅 회사입니다.</span>
          </h1>
        </div>

        <div className="overflow-hidden mb-3">
          <p
            className="lead mb-0 appear-animation"
            data-appear-animation="maskUp"
            data-appear-animation-delay="200"
          >
            강의를 시작한 건 2007년 부터입니다. 사내 강사로 시작하여 2014년 프리랜서, 현재는 The Y
            컴퍼니를 이야기 하고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );

  const Qutoa1 = () => (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <blockquote className="blockquote-tertiary">
            <h4>우리가 존재하는 이유(Mission)는 "행복한 관계"를 꿈꾸는 것입니다.</h4>
            <footer>
              <cite title="SourceTitle">- 더와이컴퍼니</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );

  const Content1 = () => (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <p className="lead text-4">
            첫 직장은 고객응대가 많았던 직업이었습니다.
            <br />
            대면이든 비대면이든 늘 상담을 하고 특히 고객 만족팀에서는 마주하는 고객들과 좋은
            이야기를 나누는 것이 아니니 감정적 소진이 심했어요
            <br />
            그래서 지금 생각해보니 내가 그곳에서 10년이나 근무할 수 있었던 것은 동료와의 "행복한
            관계"였다고 생각합니다.
          </p>
          <p className="lead text-4">
            야근을 하면서도 나눠먹는 떡볶이와 순대가 정말 맛있었고
            <br />
            주말이면 상사, 동료와 강릉 앞바다에서 직장 이야기, 인생이야기를 나누고
            <br />
            퇴사를 하고 나서 10년이 지났지만 남편과 아이와 같이 모임을 하며
            <br />
            어떻게 보면 "행복한 직장"은{' '}
            <strong className="font-weight-extra-bold">"행복한 관계"</strong>를 나눌 때<br />
            작은 갈등이 있어도
            <br />
            조직의 큰 문제가 생겨도
            <br />
            같이 해결해보자라는 의지가 생기도록 한다는 것을 알았습니다.
          </p>
          <h2 className="font-weight-normal text-7 mb-2">
            그래서 <strong className="font-weight-extra-bold">더와이컴퍼니</strong>는
          </h2>
          <h3 className="font-weight-normal text-4 mb-2">첫째, 출근길에 콧노래 나오는 직장</h3>
          <h3 className="font-weight-normal text-4 mb-2">둘째, 주말에도 보고 싶은 상사</h3>
          <h3 className="font-weight-normal text-4">
            셋째, 밥 한끼 먹을 수 있는 고객과의 관계를 상상합니다.
          </h3>
        </div>
      </div>
    </div>
  );

  const Qutoa2 = () => (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <blockquote className="blockquote-primary">
            <h4>우리의 비전(Vision)은 믿을 수 있는 커뮤니케이터가 되는 것입니다.</h4>
            <footer>
              <cite title="SourceTitle">- 더와이컴퍼니</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );

  const Content2 = () => (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <p className="lead text-4">
            제 교육에는 늘 이런 믿음이 있습니다.
            <br />
            그래서 제가 강의를 의뢰받거나 강사를 섭외할 때는 이런 기준을 가지고 일을 합니다.
          </p>

          <h2 className="font-weight-normal text-7 mb-2">
            <strong className="font-weight-extra-bold">더와이컴퍼니</strong>의{' '}
            <strong className="font-weight-extra-bold">핵심가치</strong>는
          </h2>
          <h3 className="font-weight-normal text-4 mb-2">
            하나. 사랑입니다. 우리 안의 사랑이 변화를 일으킬 것이라 믿습니다.
          </h3>
          <h3 className="font-weight-normal text-4 mb-2">
            하나. 희망입니다. 할 수 있다라는 희망이 우리를 움직입니다.
          </h3>
          <h3 className="font-weight-normal text-4">
            하나. 최선입니다. 최선을 다하는 마음은 우리를 더 성장시킬 것입니다.
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col">{Title}</div>
        </div>
      </div>
      <Qutoa1 />
      <Content1 />
      <Qutoa2 />
      <Content2 />

      <div className="container">
        <div className="row pb-5">
          <div className="col">
            <p className="drop-caps drop-caps-style-2 text-4">
              Y우리가 진행하는 모든 강의에 우리의 비전과 미션과 핵심가치가 잘 전달되도록 더 나은
              강의가 되기 위해 늘 질문하는{' '}
              <strong className="font-weight-extra-bold">더와이컴퍼니</strong>가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
