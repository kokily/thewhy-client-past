import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { LIST_QUESTIONS } from '../../libs/graphql/questions';
import { ME } from '../../libs/graphql/auth';
import { MeType, QuestionType } from '../../libs/types';
import Question from '../../components/question/Question';

function QuestionContainer() {
  const router = useRouter();
  const { page }: { page?: number } = router.query;
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const { data, loading, error, refetch } = useQuery<{
    ListQuestions: { questions: QuestionType[]; lastPage: number };
  }>(LIST_QUESTIONS, {
    variables: { page: page ? parseInt(page.toString()) : 1, title },
  });

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
    router.push(`/question/${id}`);
  };

  const onAdd = () => {
    router.push('/question/add');
  };

  if (loading) return null;
  if (error) return null;

  return (
    <Question
      questions={data?.ListQuestions.questions}
      lastPage={data?.ListQuestions.lastPage}
      page={page ? page : 1}
      onRead={onRead}
      onAdd={onAdd}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
    />
  );
}

export default QuestionContainer;
