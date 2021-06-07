import React from 'react';
import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import AddHeader from '../../../components/stories/temp/AddHeader';
import { isProd, prodServer, devServer } from '../../../libs/constants';
import { ADD_STORY, UPDATE_STORY } from '../../../libs/graphql/stories';
import { StoryType } from '../../../libs/types';

interface AddHeaderContainerProps {
  storyId: string;
  title: string;
  body: string;
  thumbnail: string;
  tags: string[];
  setThumbnail: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  edit: Boolean;
  story: StoryType | null;
}

function AddHeaderContainer({
  storyId,
  title,
  body,
  thumbnail,
  tags,
  setThumbnail,
  setBody,
  edit,
  story,
}: AddHeaderContainerProps) {
  const client = useApolloClient();
  const router = useRouter();
  const [AddStory] = useMutation(ADD_STORY);
  const [UpdateStory] = useMutation(UPDATE_STORY);

  const onList = () => {
    router.back();
  };

  const onThumbnail = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(`${isProd ? prodServer : devServer}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response) {
        alert('업로드 에러 발생! 관리자에게 문의하세요');
        return;
      }

      const data = await response.json();

      setThumbnail(`https://image.thewhy.kr/${data.key}`);
    };

    upload.click();
  };

  const onUpload = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(`${isProd ? prodServer : devServer}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response) {
        alert('업로드 에러 발생! 관리자에게 문의하세요');
        return;
      }

      const data = await response.json();

      let oldBody = body;
      let newBody = `${oldBody}\n![](https://image.thewhy.kr/${data.key})`;

      setBody(newBody);
    };

    upload.click();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([title, body, tags].includes('')) {
      alert('빈 내용없이 입력해주세요');
      return;
    }

    let overlapTags = tags === [] ? [] : [...new Set(tags.map((tag) => tag.trim()))];

    try {
      if (!edit) {
        const response = await AddStory({
          variables: {
            title,
            body,
            thumbnail,
            tags: overlapTags,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/stories');
      } else {
        const response = await UpdateStory({
          variables: {
            id: storyId,
            title,
            body,
            thumbnail,
            tags: overlapTags,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push(`/stories/${storyId}`);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <AddHeader onList={onList} onThumbnail={onThumbnail} onUpload={onUpload} onSubmit={onSubmit} />
  );
}

export default AddHeaderContainer;
