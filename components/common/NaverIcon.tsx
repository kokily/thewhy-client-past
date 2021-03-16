import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

interface NaverIconProps {
  href: string;
}

function NaverIcon({ href }: NaverIconProps) {
  return (
    <NaverBlock href={href}>
      <span />
    </NaverBlock>
  );
}

export default NaverIcon;

// Styles
const NaverBlock = styled.a<NaverIconProps>`
  &:hover {
    background: ${oc.green[6]}!important;
  }

  span:before {
    font-family: sans-serif;
    font-size: 11px;
    font-weight: 600;
    content: 'N';
    color: ${oc.green[6]};
  }

  &:hover span:before {
    color: white;
  }
`;
