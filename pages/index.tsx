import React from 'react';
import MainImage from '../components/home/MainImage';
import PageTemplate from '../components/common/PageTemplate';

import MainLink from '../components/home/MainLink';

function IndexPage() {
  return (
    <PageTemplate>
      <MainImage />
      <MainLink />
    </PageTemplate>
  );
}

export default IndexPage;
