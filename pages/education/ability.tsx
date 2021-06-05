import React from 'react';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Ability from '../../components/education/Ability';

function AbilityPage() {
  return (
    <>
      <Head>
        <title>직무 역량강화 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/education/ability" />
        <meta name="keywords" content="직무역량 강화, 커뮤니케이션 교육, 더와이컴퍼니" />
        <meta
          name="description"
          content="직무역량 강화, 직무분석을 통해 체계적인 교육훈련 프로그램 도출 및 제시"
        />
      </Head>
      <PageTemplate>
        <Ability />
      </PageTemplate>
    </>
  );
}

export default AbilityPage;
