import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { READ_STORY } from '../../../libs/graphql/stories';
import { StoryType } from '../../../libs/types';
import WriteLayout from '../../../components/common/WriteLayout';
import AddHeaderContainer from './AddHeaderContainer';

import AddContentContainer from './AddContentContainer';
import AddPreview from '../../../components/stories/temp/AddPreview';

interface EditProps {
  edit?: boolean;
}

function AddContainer({ edit }: EditProps) {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading } = useQuery<{ ReadStory: { story: StoryType | null } }>(READ_STORY, {
    variables: { id },
  });
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [leftRatio, setLeftRatio] = useState(0.5);
  const leftLand = { flex: leftRatio };
  const divideLand = { left: `${leftRatio * 100}` };
  const rightLand = { flex: 1 - leftRatio };

  // Layout Mouse Move
  const onMouseMove = (e: any) => {
    setLeftRatio(e.clientX / window.innerWidth);
  };

  const onMouseUp = (e: any) => {
    document.body.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onDivideMouseDown = (e: any) => {
    document.body.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    if (data?.ReadStory.story) {
      setTitle(data.ReadStory.story.title);
      setBody(data.ReadStory.story.body);
      setThumbnail(data.ReadStory.story.thumbnail);
      setTags(data.ReadStory.story.tags);
    }
  }, [edit, data]);

  if (loading) return null;

  return (
    <WriteLayout
      header={
        <AddHeaderContainer
          storyId={id}
          title={title}
          body={body}
          thumbnail={thumbnail}
          tags={tags}
          setThumbnail={setThumbnail}
          setBody={setBody}
          edit={edit}
          story={null}
        />
      }
      preview={<AddPreview title={title} body={body} thumbnail={thumbnail} tags={tags} />}
      content={
        <AddContentContainer
          title={title}
          body={body}
          tags={tags}
          setTitle={setTitle}
          setBody={setBody}
          setTags={setTags}
        />
      }
      leftLand={leftLand}
      divideLand={divideLand}
      rightLand={rightLand}
      onDivideMouseDown={onDivideMouseDown}
    />
  );
}

export default AddContainer;
