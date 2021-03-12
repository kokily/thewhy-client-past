import React, { useState } from 'react';
import useListStories from '../../libs/hooks/useListStories';
import Stories from '../../components/stories/Stories';
import { useQuery } from '@apollo/client';
import { ME } from '../../libs/graphql/auth';
import { MeType } from '../../libs/types';

function StoriesContainer() {
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const { data, loading, error } = useListStories(title);
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      return;
    } else {
      setTitle(search);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      onSearch(e);
    }
  };

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return (
    <Stories
      stories={data?.ListStories.stories}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
      me={me?.Me.me}
    />
  );
}

export default StoriesContainer;
