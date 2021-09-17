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

function Term16() {
  return (
    <div className="row">
      <div className="col-lg-10">
        <h3 className="text-3 font-weight-bold mb-1">제 16조 [게시물의 관리]</h3>

        <UL className="list list-primary">
          <li className="mb-0">
            ① 회사는 다음 각 호에 해당하는 게시물이나 자료를 사전통지 없이 삭제, 이동하거나 등록
            거부할 수 있습니다.
            <dl>
              <dt>1. 다른 회원 또는 제 3자에게 심한 모욕을 주거나 명예를 손상시키는 내용인 경우</dt>
              <dt>2. 공공질서 및 미풍양속에 위반되는 내용을 유포하거나 링크시키는 경우</dt>
              <dt>3. 불법복제 또는 해킹을 조장하는 내용인 경우</dt>
              <dt>4. 영리를 목적으로 하는 광고일 경우</dt>
              <dt>5. 범죄와 결부된다고 객관적으로 인정되는 내용일 경우</dt>
              <dt>6. 다른 이용자 또는 제 3자의 저작권 등 기타 권리를 침해하는 내용인 경우</dt>
              <dt>7. 회사에서 규정한 게시물 원칙에 어긋나거나, 게시판 성격에 부합하지 않는 경우</dt>
              <dt>8. 기타 관계법령에 위배된다고 판단되는 경우</dt>
            </dl>
          </li>
        </UL>
      </div>
    </div>
  );
}

export default Term16;
