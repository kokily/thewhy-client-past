import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_QUESTION } from '../../libs/graphql/questions';
import { QuestionType } from '../../libs/types';
import ReadQuestionContainer from '../../containers/question/ReadQuestionContainer';

function ReadQuestion({ question }: { question: QuestionType }) {
  const keywords = question.reply?.body;
  const description = question.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return (
    <>
      <Head>
        {question && (
          <>
            <title>{question.title} - 더와이컨설팅</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
          </>
        )}
      </Head>
      <PageTemplate>
        <ReadQuestionContainer />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const question = await apollo.query<{ ReadQuestion: { question: QuestionType | null } }>({
    query: READ_QUESTION,
    variables: { id },
  });

  return {
    props: {
      question: question.data?.ReadQuestion.question,
    },
  };
};

export default ReadQuestion;
