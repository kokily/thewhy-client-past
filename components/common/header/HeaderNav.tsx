import React from 'react';
import NavMenu from '../../../libs/menu';
import { MenuProps } from '../../../libs/types';

function NavItem({ title, url, items }: MenuProps) {
  return (
    <li className="dropdown" style={{ marginRight: '5rem' }}>
      <a className="dropdown-item dropdown-toggle" href={url}>
        {title}
      </a>
      {items && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.id}>
              <a className="dropdown-item" href={item.subUrl}>
                {item.subTitle}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function HeaderNav() {
  return (
    <div className="header-nav-bar header-nav-bar-top-border">
      <div className="header-container container">
        <div className="header-row">
          <div className="header-column">
            <div className="header-row justify-content-end">
              <div className="header-nav p-0">
                <div className="header-nav header-nav-links justify-content-lg-center">
                  <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-dropdown-arrow header-nav-main-dropdown-center header-nav-main-dropdown-center-bottom header-nav-main-effect-3 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav nav-pills flex-column flex-lg-row" id="mainNav">
                        {NavMenu.map((menu) => (
                          <NavItem
                            key={menu.id}
                            title={menu.title}
                            url={menu.url}
                            items={menu.items && menu.items}
                          />
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <button
                    className="btn header-btn-collapse-nav"
                    data-toggle="collapse"
                    data-target=".header-nav-main nav"
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
