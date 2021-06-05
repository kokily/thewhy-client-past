import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Service from '../../components/education/Service';

function EducationPage() {
  return (
    <>
      <Head>
        <title>서비스 커뮤니케이션 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/education" />
        <meta name="keywords" content="서비스 커뮤니케이션, 커뮤니케이션 교육, 더와이컴퍼니" />
        <meta name="description" content="커뮤니케이션 교육, 맞춤화된 교육 프로그램 제시" />
      </Head>
      <PageTemplate>
        <Service />
      </PageTemplate>
    </>
  );
}

export default EducationPage;
