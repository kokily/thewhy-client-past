import React from 'react';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { READ_NOTICE, REMOVE_NOTICE } from '../../libs/graphql/notice';
import { MeType, NoticeType } from '../../libs/types';
import ReadNotice from '../../components/notice/ReadNotice';
import { ME } from '../../libs/graphql/auth';

function ReadNoticeContainer() {
  const router = useRouter();
  const client = useApolloClient();
  const { id }: { id?: string } = router.query;
  const { data, loading, error } = useQuery<{ ReadNotice: { notice: NoticeType } }>(READ_NOTICE, {
    variables: { id },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [RemoveNotice] = useMutation(REMOVE_NOTICE);

  const onRemove = async () => {
    try {
      const response = await RemoveNotice({
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
    router.push(`/notice/edit/${id}`);
  };

  if (loading) return null;
  if (meLoading) return null;
  if (error) return null;

  return (
    <ReadNotice
      notice={data?.ReadNotice.notice}
      me={me?.Me.me}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
  );
}

export default ReadNoticeContainer;
