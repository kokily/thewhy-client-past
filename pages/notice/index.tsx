import React from 'react';
import { GetServerSideProps } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_NOTICE } from '../../libs/graphql/notice';
import ListNoticeContainer from '../../containers/notice/ListNoticeContainer';

function NoticePage() {
  return (
    <PageTemplate>
      <ListNoticeContainer />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const response = await apollo.query({
    query: LIST_NOTICE,
  });

  return {
    props: {
      notice: response.data?.ListNotice?.notice,
    },
  };
};

export default NoticePage;
