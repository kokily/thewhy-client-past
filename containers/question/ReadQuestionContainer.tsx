import React, { useState } from 'react';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { READ_QUESTION, REMOVE_QUESTION } from '../../libs/graphql/questions';
import { MeType, QuestionType } from '../../libs/types';
import { ME } from '../../libs/graphql/auth';
import ReadQuestion from '../../components/question/ReadQuestion';
import { ADD_REPLY, REMOVE_REPLY } from '../../libs/graphql/replies';

function ReadQuestionContainer() {
  const client = useApolloClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading, error, refetch } = useQuery<{ ReadQuestion: { question: QuestionType } }>(
    READ_QUESTION,
    {
      variables: { id },
    }
  );
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [toggle, setToggle] = useState(false);
  const [reply, setReply] = useState('');
  const [RemoveQuestion] = useMutation(REMOVE_QUESTION);
  const [AddReply] = useMutation(ADD_REPLY);
  const [RemoveReply] = useMutation(REMOVE_REPLY);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onRemove = async () => {
    try {
      const response = await RemoveQuestion({
        variables: { id },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      router.push('/question');
    } catch (err) {
      alert(err);
    }
  };

  const onAddReply = async () => {
    if ([reply].includes('')) {
      alert('답글을 작성 후 저장하세요');
      return;
    }

    try {
      const response = await AddReply({
        variables: {
          body: reply,
          questionId: id,
        },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      await refetch();
    } catch (err) {
      alert(err);
    }
  };

  const onRemoveReply = async () => {
    try {
      const response = await RemoveReply({
        variables: { id: data?.ReadQuestion.question.replyId },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      await refetch();
    } catch (err) {
      alert(err);
    }
  };

  if (loading) return null;
  if (meLoading) return null;
  if (error) return null;

  return (
    <ReadQuestion
      question={data?.ReadQuestion.question}
      me={me?.Me.me}
      reply={reply}
      toggle={toggle}
      onChange={onChange}
      onToggle={onToggle}
      onRemove={onRemove}
      onAddReply={onAddReply}
      onRemoveReply={onRemoveReply}
    />
  );
}

export default ReadQuestionContainer;
