import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_STORY } from '../../libs/graphql/stories';
import { StoryType } from '../../libs/types';
import ReadStoryContainer from '../../containers/stories/ReadStoryContainer';

function ReadStoryPage({ story }: { story: StoryType }) {
  const tags = story?.tags.join();
  const description = story.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return (
    <>
      <Head>
        {story && (
          <>
            <title>{story.title} - 더와이컴퍼니</title>
            <meta name="keywords" content={tags} />
            <meta name="description" content={description} />
          </>
        )}
      </Head>

      <PageTemplate>
        <ReadStoryContainer />
      </PageTemplate>
    </>
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
