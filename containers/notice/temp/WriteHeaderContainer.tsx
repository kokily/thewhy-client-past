import React from 'react';
import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { NoticeType } from '../../../libs/types';
import { ADD_NOTICE, UPDATE_NOTICE } from '../../../libs/graphql/notice';
import WriteHeader from '../../../components/notice/temp/WriteHeader';
import { devServer, isProd, prodServer } from '../../../libs/constants';

interface WriteHeaderContainerProps {
  noticeId: string;
  title: string;
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  edit: boolean;
  notice: NoticeType | null;
}

function WriteHeaderContainer({
  noticeId,
  title,
  body,
  setBody,
  edit,
  notice,
}: WriteHeaderContainerProps) {
  const client = useApolloClient();
  const router = useRouter();
  const [AddNotice] = useMutation(ADD_NOTICE);
  const [UpdateNotice] = useMutation(UPDATE_NOTICE);

  const onList = () => {
    router.back();
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

      const data = await response.json();

      let oldBody = body;
      let newBody = `${oldBody}\n![](https://image.thewhy.kr/${data.key})`;

      setBody(newBody);
    };

    upload.click();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([title, body].includes('')) {
      alert('빈 내용 없이 입력해주세요');
      return;
    }

    try {
      if (!edit) {
        const response = await AddNotice({
          variables: {
            title,
            body,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/notice');
      } else {
        const response = await UpdateNotice({
          variables: {
            id: noticeId,
            title,
            body,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/notice');
      }
    } catch (err) {
      alert(err);
    }
  };

  return <WriteHeader onList={onList} onUpload={onUpload} onSubmit={onSubmit} />;
}

export default WriteHeaderContainer;
