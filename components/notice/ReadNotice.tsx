import React, { useState } from 'react';
import { MeType, NoticeType } from '../../libs/types';
import MarkdownRender from '../common/MarkdownRender';
import PageHeader from '../common/PageHeader';
import RemoveModal from '../common/RemoveModal';

interface ReadNoticeProps {
  notice: NoticeType;
  me: MeType | null;
  onRemove: () => void;
  onUpdate: () => void;
}

function ReadNotice({ notice, me, onRemove, onUpdate }: ReadNoticeProps) {
  const [modal, toggleModal] = useState(false);

  const onRemoveClick = () => {
    toggleModal(true);
  };

  const onCancel = () => {
    toggleModal(false);
  };

  const onConfirm = () => {
    toggleModal(false);

    if (onRemove) {
      onRemove();
    }
  };

  return (
    <>
      <PageHeader link={notice.title} linkTitle={'공지사항'} title={notice.title} />

      {me && (
        <div className="container py-2">
          <div className="row">
            <div className="col-md-6">
              <button onClick={onRemoveClick} className="btn btn-outline btn-danger">
                삭제
              </button>
              <button onClick={onUpdate} className="btn btn-outline btn-info ml-2">
                수정
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container py-2">
        <div className="row">
          <div className="col-md-10">
            <MarkdownRender markdown={notice.body} />
          </div>
        </div>
      </div>

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
}

export default ReadNotice;
