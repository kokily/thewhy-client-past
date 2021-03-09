import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Notice from '../../components/notice/Notice';
import { NoticeType } from '../../libs/types';
import { LIST_NOTICE } from '../../libs/graphql/notice';

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

  if (loading) return null;
  if (error) return null;

  return <Notice notice={data?.ListNotice.notice} lastPage={data?.ListNotice.lastPage} />;
}

export default ListNoticeContainer;
