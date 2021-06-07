import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import AddTagsContainer from '../../containers/stories/AddTagsContainer';
import EditorTitle from '../common/EditorTitle';
import QuillEditor from '../common/QuillEditor';

// Styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const EditorBox = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TagBox = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ThumbnailBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 2.2rem;

  img {
    width: 100%;
    max-width: 650px;
    height: auto;
    filter: sepia(40%);
    border: 1px solid white;
    border-radius: 4px;
    padding: 5px;
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

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

interface Props {
  edit: boolean;
  title: string;
  body: string;
  thumbnail: string;
  tags: string[];
  onChangeTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeBody: (text: string) => void;
  onChangeTags: (nextTags: string[]) => void;
  onBack: () => void;
  onThumbnail: () => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const EditorPane: React.FC<Props> = ({
  edit,
  title,
  body,
  thumbnail,
  tags,
  onChangeTitle,
  onChangeBody,
  onChangeTags,
  onBack,
  onThumbnail,
  onSubmit,
}) => {
  return (
    <Container>
      <EditorBox>
        <Wrapper>
          <EditorTitle placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
          <TagBox>
            <AddTagsContainer tags={tags} onChangeTags={onChangeTags} />
          </TagBox>
          <ThumbnailBox>
            {thumbnail ? (
              <img src={thumbnail} alt="" />
            ) : (
              <button onClick={onThumbnail}>썸네일 업로드</button>
            )}
          </ThumbnailBox>
          <QuillEditor edit={edit} QuillChange={onChangeBody} body={body} />
        </Wrapper>
      </EditorBox>
    </Container>
  );
};

export default EditorPane;
