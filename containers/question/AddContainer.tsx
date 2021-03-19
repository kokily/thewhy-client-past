import React, { useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { ADD_QUESTION, READ_QUESTION, UPDATE_QUESTION } from '../../libs/graphql/questions';
import AddQuestion from '../../components/question/AddQuestion';
import { QuestionType } from '../../libs/types';

interface StateProps {
  name: string;
  password: string;
  phone: string;
  email: string;
  title: string;
}

interface ActionProps {
  name: string;
  value: string;
}

function reducer(state: StateProps, action: ActionProps) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

interface AddContainerProps {
  edit?: boolean;
}

function AddContainer({ edit }: AddContainerProps) {
  const client = useApolloClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const [AddQuestionResolver] = useMutation(ADD_QUESTION);
  const [UpdateQuestionResolver] = useMutation(UPDATE_QUESTION);
  const { data, loading } = useQuery<{ ReadQuestion: { question: QuestionType | null } }>(
    READ_QUESTION,
    {
      variables: { id },
    }
  );
  const [state, dispatch] = useReducer(reducer, {
    name: data?.ReadQuestion.question.name || '',
    password: '',
    phone: data?.ReadQuestion.question.phone || '',
    email: data?.ReadQuestion.question.email || '',
    title: data?.ReadQuestion.question.title || '',
  });
  const { name, password, phone, email, title } = state;
  const [body, setBody] = useState(data?.ReadQuestion.question.body || '');
  const [agree, setAgree] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onChangeAgree = () => {
    setAgree(!agree);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([name, password, title, body].includes('')) {
      alert('* 표시는 필수 작성입니다!');
      return;
    }

    if (!agree) {
      alert('정보에 동의해 주셔야 합니다.');
      return;
    }

    try {
      if (edit) {
        const response = await UpdateQuestionResolver({
          variables: {
            id,
            name,
            password,
            phone,
            email,
            title,
            body,
          },
        });

        if (!response) return;
        if (response.data.UpdateQuestion.error) {
          alert(response.data.UpdateQuestion.error);
          return;
        } else {
          await client.clearStore();

          router.back();
        }
      } else {
        const response = await AddQuestionResolver({
          variables: {
            name,
            password,
            phone,
            email,
            title,
            body,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();

        router.push('/question');
      }
    } catch (err) {
      alert(err);
    }
  };

  if (loading) return null;

  return (
    <AddQuestion
      name={name}
      password={password}
      phone={phone}
      email={email}
      title={title}
      body={body}
      agree={agree}
      onChange={onChange}
      onChangeBody={onChangeBody}
      onChangeAgree={onChangeAgree}
      onSubmit={onSubmit}
    />
  );
}

export default AddContainer;
