import React from 'react';
import { GetServerSideProps } from 'next';
import PageHeader from '../../components/common/PageHeader';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_STORIES } from '../../libs/graphql/stories';
import StoriesContainer from '../../containers/stories/StoriesContainer';

function StoriesPage() {
  return (
    <PageTemplate>
      <PageHeader title={'The Y 이야기'} />

      <StoriesContainer />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const stories = await apollo.query({
    query: LIST_STORIES,
  });

  return {
    props: {
      stories,
    },
  };
};

export default StoriesPage;
