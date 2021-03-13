import React from 'react';
import { GetServerSideProps } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_STORY } from '../../libs/graphql/stories';
import { StoryType } from '../../libs/types';
import ReadStoryContainer from '../../containers/stories/ReadStoryContainer';

function ReadStoryPage() {
  return (
    <PageTemplate>
      <ReadStoryContainer />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const response = await apollo.query<{ ReadStory: { story: StoryType } }>({
    query: READ_STORY,
    variables: { id },
  });

  return {
    props: {
      story: response.data?.ReadStory.story,
    },
  };
};

export default ReadStoryPage;
