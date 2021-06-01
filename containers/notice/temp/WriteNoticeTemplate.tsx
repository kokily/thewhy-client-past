import React, { useEffect, useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { READ_NOTICE } from '../../../libs/graphql/notice';
import { NoticeType } from '../../../libs/types';
import WriteLayout from '../../../components/common/WriteLayout';
import WriteHeaderContainer from './WriteHeaderContainer';
import WritePreviewContainer from './WritePreviewContainer';
import WriteContentContainer from './WriteContentContainer';

interface WriteNoticeTemplateProps {
  edit?: boolean;
}

function WriteNoticeTemplate({ edit }: WriteNoticeTemplateProps) {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading } = useQuery<{ ReadNotice: { notice: NoticeType | null } }>(READ_NOTICE, {
    variables: { id },
  });
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [leftRatio, setLeftRatio] = useState(0.5);
  const leftLand = { flex: leftRatio };
  const divideLand = { left: `${leftRatio * 100}` };
  const rightLand = { flex: 1 - leftRatio };

  // Layout Mouse Move
  const onMouseMove = (e: any) => {
    setLeftRatio(e.clientX / window.innerWidth);
  };

  const onMouseUp = (e: any) => {
    document.body.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onDivideMouseDown = (e: any) => {
    document.body.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    if (data?.ReadNotice.notice) {
      setTitle(data?.ReadNotice.notice.title);
      setBody(data?.ReadNotice.notice.body);
    }
  }, [edit, data]);

  if (loading) return null;

  return (
    <WriteLayout
      header={
        <WriteHeaderContainer
          noticeId={id}
          title={title}
          body={body}
          setBody={setBody}
          edit={edit}
          notice={null}
        />
      }
      preview={<WritePreviewContainer title={title} body={body} />}
      content={
        <WriteContentContainer title={title} body={body} setTitle={setTitle} setBody={setBody} />
      }
      leftLand={leftLand}
      divideLand={divideLand}
      rightLand={rightLand}
      onDivideMouseDown={onDivideMouseDown}
    />
  );
}

export default WriteNoticeTemplate;
