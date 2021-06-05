import React from 'react';
import Head from 'next/head';
import MainImage from '../components/home/MainImage';
import PageTemplate from '../components/common/PageTemplate';

import MainLink from '../components/home/MainLink';

function IndexPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://thewhy.kr" />
      </Head>
      <PageTemplate>
        <MainImage />
        <MainLink />
      </PageTemplate>
    </>
  );
}

export default IndexPage;
