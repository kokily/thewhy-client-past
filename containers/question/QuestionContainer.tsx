import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Question from '../../components/question/Question';
import { LIST_QUESTIONS } from '../../libs/graphql/questions';
import { ME } from '../../libs/graphql/auth';
import { MeType, QuestionType } from '../../libs/types';

function QuestionContainer() {
  const router = useRouter();
  const { page }: { page?: number } = router.query;
  const { data, loading, error } = useQuery<{
    ListQuestions: { questions: QuestionType[]; lastPage: number };
  }>(LIST_QUESTIONS, {
    variables: { page: page ? parseInt(page.toString()) : 1 },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      return;
    } else {
      setTitle(search);
      router.push(`/question?title=${search}`);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      onSearch(e);
    }
  };

  const onRead = (id: string) => {
    router.push(`/question/${id}`);
  };

  const onAdd = () => {
    router.push('/question/add');
  };

  if (loading) return null;
  if (meLoading) return null;
  if (error) return null;

  return (
    <Question
      questions={data?.ListQuestions.questions}
      lastPage={data?.ListQuestions.lastPage}
      page={page ? page : 1}
      me={me?.Me.me}
      onRead={onRead}
      onAdd={onAdd}
      search={search}
      title={title}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
    />
  );
}

export default QuestionContainer;
