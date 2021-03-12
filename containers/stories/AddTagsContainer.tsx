import React, { useCallback, useEffect, useState } from 'react';
import AddTagBox from '../../components/stories/AddTagBox';

interface AddTagsContainerProps {
  tags: string[];
  onChangeTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function AddTagsContainer({ tags, onChangeTags }: AddTagsContainerProps) {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState<string[]>([]);

  const addTag = useCallback(
    (tag: string) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;

      const nextTags = [...localTags, tag];

      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const removeTag = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter((text) => text !== tag);

      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      addTag(input.trim());
      setInput('');
    },
    [input, addTag]
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <AddTagBox
      input={input}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      localTags={localTags}
      removeTag={removeTag}
    />
  );
}

export default AddTagsContainer;
