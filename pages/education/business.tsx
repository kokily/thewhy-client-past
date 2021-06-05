import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Business from '../../components/education/Business';

function BusinessPage() {
  return (
    <>
      <Head>
        <title>비즈니스 커뮤니케이션 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/education/business" />
        <meta name="keywords" content="비즈니스 커뮤니케이션, 커뮤니케이션 교육, 더와이컴퍼니" />
        <meta
          name="description"
          content="커뮤니케이션 교육, 더 나은 비즈니스 역량을 고민하는 고객사를 위한 프로그램 제시"
        />
      </Head>
      <PageTemplate>
        <Business />
      </PageTemplate>
    </>
  );
}

export default BusinessPage;
