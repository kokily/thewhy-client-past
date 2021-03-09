import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../libs/graphql/auth';
import Login from '../../components/thewhy/Login';

function LoginContainer() {
  const [LoginResolver, { client }] = useMutation(LOGIN);
  const [password, setPassword] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await LoginResolver({
        variables: { password },
      });

      if (response.data.Login.error) {
        console.error(response.data.Login.error);
      } else {
        if (!response || !response) return;

        await client.clearStore();

        document.location.href = '/';
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      onSubmit(e);
    }
  };

  return (
    <Login password={password} onChange={onChange} onSubmit={onSubmit} onKeyPress={onKeyPress} />
  );
}

export default LoginContainer;
