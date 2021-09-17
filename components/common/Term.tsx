import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div``;

interface Props {}

const Term: React.FC<Props> = () => {
  return (
    <Container id="term-dialog" className="dialog dialog-lg zoom-anim-dialog p-4 mfp-hide">
      <h3>(주)더와이컨설팅 이용약관</h3>
    </Container>
  );
};

export default Term;
