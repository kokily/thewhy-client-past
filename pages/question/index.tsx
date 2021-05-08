import React from 'react';
import { GetServerSideProps } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import QuestionContainer from '../../containers/question/QuestionContainer';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_QUESTIONS } from '../../libs/graphql/questions';
import { QuestionType } from '../../libs/types';

function QuestionPage() {
  return (
    <PageTemplate>
      <QuestionContainer />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const response = await apollo.query<{ ListQuestions: { questions: QuestionType[] | null } }>({
    query: LIST_QUESTIONS,
  });

  return {
    props: {
      questions: response.data?.ListQuestions.questions,
    },
  };
};

export default QuestionPage;
