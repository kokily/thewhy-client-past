import styled, { css } from 'styled-components';
import oc from 'open-color';
import TextareaAutosize from 'react-textarea-autosize';

const style = css`
  display: block;
  padding: 0;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: ${oc.gray[9]};
  margin-bottom: 1rem;
  overflow: hidden;

  &::placeholder {
    color: ${oc.gray[5]};
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const EditorTitle = styled(TextareaAutosize)`
  ${style}
`;

export default EditorTitle;
