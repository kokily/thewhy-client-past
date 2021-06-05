import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ReadNoticeContainer from '../../containers/notice/ReadNoticeContainer';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_NOTICE } from '../../libs/graphql/notice';
import { NoticeType } from '../../libs/types';

function ReadNoticePage({ notice }: { notice: NoticeType }) {
  const description = notice.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return (
    <>
      <Head>
        {notice && (
          <>
            <title>{notice.title} - 더와이컴퍼니</title>
            <meta name="description" content={description} />
          </>
        )}
      </Head>
      <PageTemplate>
        <ReadNoticeContainer />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const notice = await apollo.query<{ ReadNotice: { notice: NoticeType } }>({
    query: READ_NOTICE,
    variables: { id },
  });

  return {
    props: {
      notice: notice.data?.ReadNotice.notice,
    },
  };
};

export default ReadNoticePage;
