import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import MarkdownRender from '../../common/MarkdownRender';

interface WritePreviewProps {
  title: string;
  body: string;
}

function WritePreview({ title, body }: WritePreviewProps) {
  return (
    <PreviewBox>
      <h1 className="title">{title}</h1>
      <div className="content">
        <MarkdownRender markdown={body} />
      </div>
    </PreviewBox>
  );
}

export default WritePreview;

// Styles
const PreviewBox = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.2rem;
  color: black;
  .thumbnail {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
  .title {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${oc.indigo[8]};
    padding-bottom: 0.4rem;
    border-bottom: 1px solid ${oc.indigo[7]};
  }
  .content {
    line-height: 1.6;
    word-break: break-all;
  }
  .tags {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    .tag {
      font-weight: 500;
      color: ${oc.blue[5]};
      margin-left: 0.5rem;
    }
  }
`;
