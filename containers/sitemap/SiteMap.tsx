import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import NavItem from '../../components/sitemap/NavItem';
import NavMenu from '../../libs/menu';

function SiteMap() {
  return (
    <>
      <PageHeader title={'사이트맵'} />

      <div className="container py-2 mb-4">
        <div className="row">
          {NavMenu.map((menu) => (
            <NavItem
              key={menu.id}
              title={menu.title}
              url={menu.url}
              items={menu.items && menu.items}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SiteMap;
