import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { LIST_STORIES } from '../graphql/stories';
import { StoryType } from '../types';
import useScroll from './useScroll';

function useListStories(title?: string) {
  const { data, loading, error, fetchMore } = useQuery<{ ListStories: { stories: StoryType[] } }>(
    LIST_STORIES,
    {
      variables: { title },
    }
  );
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: {
          title,
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (!fetchMoreResult.ListStories.stories) return prev;
          if (fetchMoreResult.ListStories.stories.length === 0) {
            setIsFinished(true);
          }

          return {
            ListStories: {
              ...prev.ListStories,
              stories: [...prev.ListStories.stories, ...fetchMoreResult.ListStories.stories],
            },
          };
        },
      });
    },
    [fetchMore, title]
  );

  const cursor = data?.ListStories.stories[data?.ListStories.stories.length - 1]?.id;

  useScroll({
    cursor,
    onLoadMore,
  });

  return { data, loading, error, isFinished };
}

export default useListStories;
