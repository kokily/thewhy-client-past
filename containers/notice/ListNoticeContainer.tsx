import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Notice from '../../components/notice/Notice';
import { MeType, NoticeType } from '../../libs/types';
import { LIST_NOTICE } from '../../libs/graphql/notice';
import { ME } from '../../libs/graphql/auth';

function ListNoticeContainer() {
  const router = useRouter();
  const { page }: { page?: number } = router.query;
  const { data, loading, error } = useQuery<{
    ListNotice: { notice: NoticeType[]; lastPage: number };
  }>(LIST_NOTICE, {
    variables: {
      page: page ? parseInt(page.toString()) : 1,
    },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  const onWrite = () => {
    router.push('/notice/write');
  };

  if (loading) return null;
  if (meLoading) return null;
  if (error) return null;

  return (
    <Notice
      notice={data?.ListNotice.notice}
      lastPage={data?.ListNotice.lastPage}
      me={me?.Me.me}
      onWrite={onWrite}
    />
  );
}

export default ListNoticeContainer;
