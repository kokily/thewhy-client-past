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
        <meta name="keywords" content="온라인 프로그램, 커뮤니케이션 교육, 더와이컴퍼니" />
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
