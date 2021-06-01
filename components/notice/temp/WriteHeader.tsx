import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import shadow from '../../libs/styles/shadow';

interface WriteHeaderProps {
  onList: () => void;
  onUpload: () => void;
  onSubmit: (e: React.MouseEvent) => void;
}

function WriteHeader({ onList, onUpload, onSubmit }: WriteHeaderProps) {
  return (
    <HeaderBox>
      <div className="left">
        <Button onClick={onList}>목록</Button>
      </div>

      <div className="right">
        <Button onClick={onUpload}>이미지 업로드</Button>
        <Button onClick={onSubmit}>저장하기</Button>
      </div>
    </HeaderBox>
  );
}

export default WriteHeader;

// Styles
const HeaderBox = styled.div`
  background: ${oc.gray[5]};
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  .right {
    margin-left: auto;
  }
`;

const Button = styled.button`
  font-weight: 700;
  height: 2rem;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 10px;
  outline: none;
  padding: 0.4rem;
  padding-top: 0.1rem;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: white;
    color: black;
    ${shadow(1)};
  }
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;
