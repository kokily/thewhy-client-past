import React, { useReducer } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Contact from '../../components/contact/Contact';
import { SEND_CONTACT } from '../../libs/graphql/mail';
import { ActionProps, StateProps } from '../../libs/types';
import MainImage from '../../components/home/MainImage';

function reducer(state: StateProps, action: ActionProps) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function ContactContainer() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const { name, email, subject, body } = state;
  const [SendContact, { client }] = useMutation(SEND_CONTACT);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(e.target);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await SendContact({
        variables: {
          name,
          email,
          subject,
          body,
        },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      alert('메일 전송 완료!');
      router.reload();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Contact
      name={name}
      email={email}
      subject={subject}
      body={body}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default ContactContainer;
