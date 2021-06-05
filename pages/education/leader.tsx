import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Leader from '../../components/education/Leader';

function LeaderPage() {
  return (
    <>
      <Head>
        <title>리더 커뮤니케이션 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/education/leader" />
        <meta name="keywords" content="리더 커뮤니케이션, 커뮤니케이션 교육, 더와이컴퍼니" />
        <meta
          name="description"
          content="커뮤니케이션 교육, 조직의 성과, 효율적인 경영을 위한 리더의 훈련 프로그램 제시"
        />
      </Head>
      <PageTemplate>
        <Leader />
      </PageTemplate>
    </>
  );
}

export default LeaderPage;
