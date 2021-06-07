import React from 'react';
import AddContent from '../../../components/stories/temp/AddContent';
import AddTagsContainer from '../AddTagsContainer';

interface AddContentContainerProps {
  title: string;
  body: string;
  tags: string[];
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function AddContentContainer({
  title,
  body,
  tags,
  setTitle,
  setBody,
  setTags,
}: AddContentContainerProps) {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeTags = (nextTags: string[]) => {
    setTags(nextTags);
  };

  return (
    <AddContent title={title} body={body} onChangeTitle={onChangeTitle} onChangeBody={setBody}>
      <AddTagsContainer tags={tags} onChangeTags={onChangeTags} />
    </AddContent>
  );
}

export default AddContentContainer;
