import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import oc from 'open-color';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

interface WriteLayoutProps {
  header: React.ReactNode;
  preview: React.ReactNode;
  content: React.ReactNode;
  leftLand: any;
  divideLand: any;
  rightLand: any;
  onDivideMouseDown: (e) => void;
}

function WriteLayout({
  header,
  preview,
  content,
  leftLand,
  divideLand,
  rightLand,
  onDivideMouseDown,
}: WriteLayoutProps) {
  return (
    <>
      <WriteGlobal />

      <WriteBox>
        {header}

        <div className="areas">
          <ScrollSync>
            <>
              <div className="area preview" style={leftLand}>
                <ScrollSyncPane group="a">{preview}</ScrollSyncPane>
              </div>
              <div className="divide" style={divideLand} onMouseDown={onDivideMouseDown} />
              <div className="area content" style={rightLand}>
                <ScrollSyncPane group="a">{content}</ScrollSyncPane>
              </div>
            </>
          </ScrollSync>
        </div>
      </WriteBox>
    </>
  );
}

export default WriteLayout;

// Styles
// Styles
const WriteGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    background: ${oc.gray[4]};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const WriteBox = styled.div`
  .areas {
    min-height: calc(100vh - 4rem);
    display: flex;
    position: relative;

    .area {
      display: flex;
      min-width: 0;
      overflow: auto;
    }

    .divide {
      width: 1rem;
      height: 100%;
      position: absolute;
      transform: translate(calc(50vw - 0.5rem));
      cursor: col-resize;
    }

    @media (max-width: 800px) {
      .content {
        flex: 1 !important;
      }
      .divide,
      .preview {
        display: none;
      }
    }
  }
`;
