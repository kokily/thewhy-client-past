import React from 'react';
import Head from 'next/head';
import About from '../../components/about/About';
import PageTemplate from '../../components/common/PageTemplate';

function AboutPage() {
  return (
    <>
      <Head>
        <title>더와이컴퍼니를 소개합니다</title>
        <link rel="canonical" href="https://thewhy.kr/about" />
      </Head>
      <PageTemplate>
        <About />
      </PageTemplate>
    </>
  );
}

export default AboutPage;
