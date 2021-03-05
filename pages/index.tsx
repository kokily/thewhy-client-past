import React from 'react';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../libs/apollo/client';
import { LIST_STORIES } from '../libs/graphql/stories';
import { StoryType } from '../libs/types';

function IndexPage() {
  return <div>IndexPage</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const stories = await apolloClient.query<{ ListStories: { stories: StoryType[] | null } }>({
    query: LIST_STORIES,
  });

  return {
    props: {
      stories,
    },
  };
};

export default IndexPage;
