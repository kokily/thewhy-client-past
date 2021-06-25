import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Online from '../../components/online/Online';

function OnlinePage() {
  return (
    <>
      <Head>
        <title>온라인 프로그램 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/education/online" />
        <meta
          name="keywords"
          content="온라인교육,줌강의,실시간교육,이러닝,동영상교육,웹엑스,동영상프로그램"
        />
        <meta
          name="description"
          content="온라인 프로그램, 실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램 개발 및 진행"
        />
      </Head>
      <PageTemplate>
        <Online />
      </PageTemplate>
    </>
  );
}

export default OnlinePage;
