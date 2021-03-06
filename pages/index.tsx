import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Carousel from '../components/home/Carousel';
import MainLink from '../components/home/MainLink';

function IndexPage() {
  return (
    <PageTemplate>
      <Carousel />
      <MainLink />
    </PageTemplate>
  );
}

export default IndexPage;
