import React, { useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../../libs/graphql/questions';
import AddQuestion from '../../components/question/AddQuestion';

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

function AddContainer() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    password: '',
    phone: '',
    email: '',
    title: '',
  });
  const { name, password, phone, email, title } = state;
  const [body, setBody] = useState('');
  const [agree, setAgree] = useState(false);
  const [AddQuestionResolver, { client }] = useMutation(ADD_QUESTION);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onChangeAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    } catch (err) {
      alert(err);
    }
  };

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
