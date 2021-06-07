import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const TagBoxBlock = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  word-break: keep-all;

  p {
    padding-top: 1.3rem;
    margin-right: 1.3rem;
  }
`;

const TagForm = styled.form`
  background: none;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    background: none;
    &::placeholder {
      color: ${oc.gray[4]};
    }
  }
  button {
    color: ${oc.cyan[7]};
    border: 1px solid ${oc.cyan[7]};
    border-radius: 8px;
    background: none;
    padding: 0.3rem 0.5rem;
    padding-bottom: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s all;
    &:hover {
      background: ${oc.cyan[6]};
      color: white;
      border: 1px solid ${oc.cyan[4]};
    }
    &:active {
      transform: translateY(2px);
    }
  }
`;

const TagListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;
`;

const Tag = styled.div`
  cursor: pointer;
  color: ${oc.blue[6]};
  transition: 0.2s all;
  &:hover {
    color: ${oc.red[5]};
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

// Tag Item
interface TagItemProps {
  tag: string;
  onRemove: (id: string) => void;
}

const TagItem = React.memo<TagItemProps>(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// Tags List
interface TagsListProps {
  tags: string[];
  onRemove: (id: string) => void;
}

const TagsList = React.memo<TagsListProps>(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag: string) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

// Tag Box Component
interface TagBoxProps {
  input: string;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  localTags: string[];
  removeTag: (tag: string) => void;
}

function AddTagBox({ input, onSubmit, onChangeText, localTags, removeTag }: TagBoxProps) {
  return (
    <TagBoxBlock>
      <p>태그 ☞</p>

      <TagForm onSubmit={onSubmit}>
        <input placeholder="엔터로 입력!" value={input} onChange={onChangeText} />
        <button type="submit">추 가</button>
      </TagForm>

      <TagsList tags={localTags} onRemove={removeTag} />
    </TagBoxBlock>
  );
}

export default AddTagBox;
