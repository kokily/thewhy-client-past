import React from 'react';
import HeaderNav from './header/HeaderNav';
import HeaderTop from './header/HeaderTop';

function Header() {
  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 40, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0">
        <HeaderTop />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
