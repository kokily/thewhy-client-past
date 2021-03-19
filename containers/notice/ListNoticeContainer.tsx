import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Notice from '../../components/notice/Notice';
import { MeType, NoticeType } from '../../libs/types';
import { LIST_NOTICE } from '../../libs/graphql/notice';
import { ME } from '../../libs/graphql/auth';

function ListNoticeContainer() {
  const router = useRouter();
  const { page }: { page?: number } = router.query;
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const { data, loading, error, refetch } = useQuery<{
    ListNotice: { notice: NoticeType[]; lastPage: number };
  }>(LIST_NOTICE, {
    variables: {
      page: page ? parseInt(page.toString()) : 1,
      title,
    },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      await refetch();
      return;
    } else {
      setTitle(search);
      await refetch();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      onSearch(e);
    }
  };

  const onRead = (id: string) => {
    router.push(`/notice/${id}`);
  };

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
      page={page ? page : 1}
      me={me?.Me.me}
      onRead={onRead}
      onWrite={onWrite}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
    />
  );
}

export default ListNoticeContainer;
