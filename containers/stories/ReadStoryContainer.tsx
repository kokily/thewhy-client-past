import React from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { READ_STORY, REMOVE_STORY } from '../../libs/graphql/stories';
import { MeType, StoryType } from '../../libs/types';
import ReadStory from '../../components/stories/ReadStory';
import { ME } from '../../libs/graphql/auth';

function ReadStoryContainer() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading, error } = useQuery<{ ReadStory: { story: StoryType } }>(READ_STORY, {
    variables: { id },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [RemoveStory, { client }] = useMutation(REMOVE_STORY);

  const onRemove = async () => {
    try {
      const response = await RemoveStory({
        variables: { id },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      router.back();
    } catch (err) {
      alert(err);
    }
  };

  const onUpdate = () => {
    router.push(`/stories/edit/${id}`);
  };

  if (loading) return null;
  if (meLoading) return null;
  if (error) return null;

  return (
    <ReadStory
      story={data?.ReadStory.story}
      me={me?.Me.me}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
  );
}

export default ReadStoryContainer;
