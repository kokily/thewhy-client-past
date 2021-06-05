import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageHeader from '../../components/common/PageHeader';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_STORIES } from '../../libs/graphql/stories';
import StoriesContainer from '../../containers/stories/StoriesContainer';
import { StoryType } from '../../libs/types';

function StoriesPage({ metaBody, metaTags }: { metaBody: string[]; metaTags: string[] }) {
  return (
    <>
      <Head>
        <title>The Y 이야기 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/stories" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
        {metaTags && <meta name="keywords" content={metaTags.join()} />}
      </Head>

      <PageTemplate>
        <PageHeader title={'The Y 이야기'} />

        <StoriesContainer />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const stories = await apollo.query<{ ListStories: { stories: StoryType[] } }>({
    query: LIST_STORIES,
  });

  const metaBody = stories?.data.ListStories.stories.map((story) => {
    return story.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  const metaTags = stories?.data.ListStories.stories.map((story) => {
    return story.tags.join();
  });

  return {
    props: {
      metaBody,
      metaTags,
    },
  };
};

export default StoriesPage;
