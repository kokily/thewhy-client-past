import React from 'react';
import styled from 'styled-components';

// Styles
const UL = styled.ul`
  list-style: none;
  word-break: keep-all;

  li {
    margin-left: -20px;
  }

  dt {
    margin-left: 20px;
    font-weight: 300;
  }
`;

function Term2() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 2조 [정의]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <dl>
              <dt>
                1. "이용자"라 함은 "회사"의 웹사이트에 접속하여 본 약관에 따라 "회사"가 제공하는
                "콘텐츠" 및 제반 서비스를 이용하는 "회원" 및 "비회원"을 말합니다.
              </dt>
              <dt>
                2."회원"이라 함은 회사의 웹사이트에 접속하여 본 약관에 동의 함으로써 회사와
                이용계약을 체결하고 아이디(ID)를 부여 받은 자로서 회사가 제공하는 정보와 서비스를
                지속적으로 이용할 수 있는 자를 말합니다.
              </dt>
              <dt>
                3."콘텐츠"라 함은 회사 웹사이트에서 제공하는 온라인 강좌 및 기타 관련정보를
                의미함으로서, 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의
                규정에 의한 정보통신망에서 사용되는 부호ㆍ문자ㆍ음성ㆍ음향ㆍ이미지 또는 영상
                등(이들의 복합체를 포함)으로 표현된 자료 또는 정보를 말합니다.
              </dt>
              <dt>
                4. ‘상품’이란 회원에게 유상 또는 무상으로 제공하는 유형 또는 무형의 재화를 말합니다.
              </dt>
              <dt>
                5. "아이디(ID) 및 계정"이라 함은 회원의 식별 및 서비스 이용을 위하여 회원이 정하고
                회사가 승인하는 문자 또는 숫자의 조합을 말합니다.
              </dt>
              <dt>
                6."비밀번호(PASSWORD)"라 함은 서비스 이용 시, 아이디와 일치되는 회원임을 확인하고,
                회원 개인정보 보호를 위하여, 회원 자신이 정한 문자 또는 숫자의 조합을 말합니다.
              </dt>
              <dt>
                7."전자우편(Email)"이라 함은 인터넷을 통한 우편 혹은 전기적 매체를 이용한 우편을
                말합니다.
              </dt>
              <dt>
                8."운영자(관리자)"라 함은 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서
                선정한 사람 또는 회사를 말합니다.
              </dt>
              <dt>
                9."회원의 게시물"이라 함은 회사의 서비스가 제공되는 웹사이트에 회원이 올린 글,
                이미지, 각종 파일 및 링크, 각종 덧글 등의 정보를 의미합니다
              </dt>
              <dt>
                10. ‘크리에이터’란 콘텐츠 제작에 있어 그 과정의 전체를 기획하고 책임을 지는 개인
                또는 단체를 말합니다
              </dt>
            </dl>
          </li>

          <li className="mb-0">
            ② 전항 각호에 해당하는 정의 이외의, 기타 용어의 정의에 대하여는 거래 관행 및 관계 법령에
            따릅니다
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term2;
