import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Extended from '../../components/education/Extended';

function ExtendedPage() {
  return (
    <>
      <Head>
        <title>확장된 DISC 커뮤니케이션 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/education/extended" />
        <meta
          name="keywords"
          content="Extended-DISC 커뮤니케이션, 커뮤니케이션 교육, 더와이컴퍼니"
        />
        <meta
          name="description"
          content="커뮤니케이션 교육, 확장된 DISC 진단을 통한 조직 성향 분석"
        />
      </Head>
      <PageTemplate>
        <Extended />
      </PageTemplate>
    </>
  );
}

export default ExtendedPage;
