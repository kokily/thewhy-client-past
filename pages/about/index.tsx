import React from 'react';
import Head from 'next/head';
import About from '../../components/about/About';
import PageTemplate from '../../components/common/PageTemplate';

function AboutPage() {
  return (
    <>
      <Head>
        <title>더와이컨설팅을 소개합니다 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/about" />
      </Head>
      <PageTemplate>
        <About />
      </PageTemplate>
    </>
  );
}

export default AboutPage;
