import React from 'react';
import WriteContent from '../../components/notice/WriteContent';

interface WriteContentContainerProps {
  title: string;
  body: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
}

function WriteContentContainer({ title, body, setTitle, setBody }: WriteContentContainerProps) {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <WriteContent title={title} body={body} onChangeTitle={onChangeTitle} onChangeBody={setBody} />
  );
}

export default WriteContentContainer;
