import React from 'react';
import { GetServerSideProps } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_QUESTION } from '../../libs/graphql/questions';
import { QuestionType } from '../../libs/types';
import ReadQuestionContainer from '../../containers/question/ReadQuestionContainer';

function ReadQuestion() {
  return (
    <PageTemplate>
      <ReadQuestionContainer />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const response = await apollo.query<{ ReadQuestion: { question: QuestionType | null } }>({
    query: READ_QUESTION,
    variables: { id },
  });

  return {
    props: {
      qustion: response.data?.ReadQuestion.question,
    },
  };
};

export default ReadQuestion;
