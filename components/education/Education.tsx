import React from 'react';
import PageHeader from '../common/PageHeader';

function Education() {
  const Menu = [
    { id: 0, name: '서비스', option: 'service' },
    { id: 1, name: '비즈니스', option: 'business' },
    { id: 2, name: '리 더', option: 'leader' },
    { id: 3, name: '성과관리', option: 'extended' },
    { id: 4, name: '직무역량강화', option: 'empowerment' },
    { id: 5, name: '맞춤형', option: 'customized' },
    { id: 6, name: '온라인', option: 'online' },
  ];

  const MenuBar = () => (
    <ul
      className=""
      data-sort-id="portfolio"
      data-option-key="filter"
      data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}"
    ></ul>
  );

  return (
    <>
      <PageHeader title={'교육 프로그램'} />

      <div className="container py-2"></div>
    </>
  );
}

export default Education;
