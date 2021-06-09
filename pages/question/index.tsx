import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import QuestionContainer from '../../containers/question/QuestionContainer';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_QUESTIONS } from '../../libs/graphql/questions';
import { QuestionType } from '../../libs/types';

function QuestionPage({ metaBody }: { metaBody: string[] }) {
  return (
    <>
      <Head>
        <title>교육 문의 - 더와이컴퍼니</title>
        <link rel="canonical" href="https://thewhy.kr/questions" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
      </Head>
      <PageTemplate>
        <QuestionContainer />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const questions = await apollo.query<{ ListQuestions: { questions: QuestionType[] } }>({
    query: LIST_QUESTIONS,
  });

  const metaBody = questions?.data.ListQuestions.questions.map((question) => {
    return question.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      metaBody,
    },
  };
};

export default QuestionPage;
