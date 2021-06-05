import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_NOTICE } from '../../libs/graphql/notice';
import ListNoticeContainer from '../../containers/notice/ListNoticeContainer';
import { NoticeType } from '../../libs/types';

function NoticePage({ metaBody }: { metaBody: string[] }) {
  return (
    <>
      <Head>
        <title>공지사항 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/notice" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
      </Head>
      <PageTemplate>
        <ListNoticeContainer />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const notice = await apollo.query<{ ListNotice: { notice: NoticeType[] } }>({
    query: LIST_NOTICE,
  });

  const metaBody = notice?.data.ListNotice.notice.map((notice) => {
    return notice.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      metaBody,
    },
  };
};

export default NoticePage;
