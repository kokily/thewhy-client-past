import styled from 'styled-components';

const Lead = styled.p`
  font-family: '윤고딕';
  font-size: 22px;
  color: #808080;
  word-break: keep-all;
`;

function BrowserContent() {
  return (
    <>
      <Lead
        className="appear-animation animated fadeInUpShorter appear-animation-visible line-height-4"
        data-appear-animation="fadeInUpShorter"
        style={{ animationDelay: '300ms' }}
      >
        더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는
        <br />
        커뮤니케이션 교육 전문기업입니다.
      </Lead>
      <Lead
        className="appear-animation animated fadeInUpShorter appear-animation-visible line-height-4"
        data-appear-animation="fadeInUpShorter"
        style={{ animationDelay: '320ms' }}
      >
        직장인의 꿈은 퇴사라고 하는데, 직장에서 행복을
        <br />
        꿈꾸기는 어려울까요?
        <br />
        직장에서 행복을 찾기 위해서는 어떤 요인들이
        <br />
        필요할까요?
      </Lead>
      <Lead
        className="appear-animation animated fadeInUpShorter appear-animation-visible line-height-4"
        data-appear-animation="fadeInUpShorter"
        style={{ animationDelay: '340ms' }}
      >
        다양한 요인들이 필요하겠지만
        <br />
        "내가 하는 일의 전문가"가 되어 인정받는 것.
        <br />
        함께 하는 "동료와의 행복한 관계"가
        <br />
        출근길의 발걸음을 조금 더 가볍게 만들지 않을까
        <br />
        생각합니다.
      </Lead>
      <Lead
        className="appear-animation animated fadeInUpShorter appear-animation-visible line-height-4"
        data-appear-animation="fadeInUpShorter"
        style={{ animationDelay: '360ms' }}
      >
        조직의 성장과 발전을 위해
        <br />
        역량을 갖춘 인재를 양성하고, 함께할 동료가 있다면
        <br />
        무엇이든 해낼 수 있으리라 봅니다.
      </Lead>
      <Lead
        className="appear-animation animated fadeInUpShorter appear-animation-visible line-height-4"
        data-appear-animation="fadeInUpShorter"
        style={{ animationDelay: '380ms' }}
      >
        결국 개인과 조직의 행복은 사람에 있다는 것을 믿으며,
        <br />
        더와이컨설팅은 고객이 행복해지는 순간을 연구하는
        <br />
        다양한 커뮤니케이션 프로그램을 연구하도록
        <br />
        하겠습니다.
      </Lead>

      <p
        className="pb-3 appear-animation animated fadeInUpShorter appear-animation-visible"
        data-appear-animation="fadeInUpShorter"
        style={{ animationDelay: '450ms', fontFamily: '윤고딕', fontSize: '18px' }}
      >
        주식회사 더와이컨설팅
        <br />
        MASTER Communicator 김영화
      </p>
    </>
  );
}

export default BrowserContent;
