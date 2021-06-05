import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Locate from '../../components/about/Locate';

function LocatePage() {
  return (
    <>
      <Head>
        <title>찾아오시는 길 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/about/locate" />
      </Head>
      <PageTemplate>
        <Locate />
      </PageTemplate>
    </>
  );
}

export default LocatePage;
