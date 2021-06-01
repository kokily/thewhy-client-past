import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.button<{ submit?: boolean; back?: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  width: 90px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  &:active {
    transform: translateY(1px);
  }

  ${(props) =>
    props.submit &&
    css`
      border: 1px solid ${oc.cyan[6]};
      background: ${oc.cyan[6]};
      color: white;

      &:hover {
        background: white;
        color: ${oc.cyan[6]};
      }
    `}

  ${(props) =>
    props.back &&
    css`
      border: 1px solid ${oc.gray[5]};
      background: ${oc.gray[5]};
      color: white;

      &:hover {
        background: white;
        color: ${oc.gray[5]};
      }
    `}
`;

interface Props {
  submit?: boolean;
  back?: boolean;
  onClick?: any;
}

const Button: React.FC<Props> = ({ children, submit, back, ...rest }) => {
  const htmlProps = rest as any;

  return (
    <Container
      submit={submit}
      back={back}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </Container>
  );
};

export default Button;
