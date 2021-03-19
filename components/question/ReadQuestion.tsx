import React, { useState } from 'react';
import { MeType, QuestionType } from '../../libs/types';
import PageHeader from '../common/PageHeader';
import RemoveModal from '../common/RemoveModal';

interface ReadQuestionProps {
  question: QuestionType;
  me: MeType | null;
  reply: string;
  toggle: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onToggle: () => void;
  onRemove: () => void;
  onAddReply: () => void;
  onRemoveReply: () => void;
  isEdit: () => void;
}

function ReadQuestion({
  question,
  me,
  reply,
  toggle,
  onChange,
  onToggle,
  onRemove,
  onAddReply,
  onRemoveReply,
  isEdit,
}: ReadQuestionProps) {
  const [modal, setModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  const onCancel = () => {
    setModal(false);
  };

  const onRemoveReplyClick = () => {
    setReplyModal(true);
  };

  const onReplyConfirm = () => {
    setReplyModal(false);
    onRemoveReply();
  };

  const onReplyCancel = () => {
    setReplyModal(false);
  };

  return (
    <>
      <PageHeader linkTitle={`${question.name} 님의 문의글`} title={question.title} />

      {me && (
        <div className="container py-2">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <button onClick={onRemoveClick} className="btn btn-sm btn-outline btn-danger">
                본문삭제
              </button>

              {question.isReply ? (
                <button
                  onClick={onRemoveReplyClick}
                  className="btn btn-sm btn-outline btn-warning ml-2"
                >
                  답글삭제
                </button>
              ) : (
                <button onClick={onToggle} className="btn btn-sm btn-outline btn-info ml-2">
                  답글달기
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container py-2">
        <div className="row justify-content-center mb-2">
          <div className="col-md-8">
            <div
              className="appear-animation animated fadeIn appear-animation-visible"
              data-appear-animation="fadeIn"
              data-appear-animation-delay="800"
              style={{ animationDelay: '800ms' }}
            >
              <h4 className="mt-2 mb-1 text-center">작성자</h4>
              <ul className="list list-icons list-icons-style-2 mt-2">
                <li>
                  <i className="fas fa-user top-4" />
                  <strong className="text-dark">이름 </strong>
                  {question.name}
                </li>
                {me && (
                  <>
                    <li>
                      <i className="fas fa-phone top-4" />
                      <strong className="text-dark">전화번호 </strong>
                      {question.phone}
                    </li>
                    <li>
                      <i className="fas fa-envelope top-4" />
                      <strong className="text-dark">이메일 </strong>
                      {question.email}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <pre>{question.body}</pre>
          </div>
        </div>

        <div className="row justify-content-center mb-2">
          <div className="col text-center">
            <button
              className="btn btn-outline btn-rounded btn-warning btn-with-arrow mb-2"
              onClick={isEdit}
            >
              문의 글 수정(password)
            </button>
          </div>
        </div>

        {me && toggle && !question.isReply && (
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <h4>답글 달기</h4>
              <textarea
                maxLength={5000}
                rows={8}
                className="form-control text-3 h-auto py-2 pl-2"
                name="reply"
                value={reply}
                onChange={onChange}
              />
              <button onClick={onAddReply} className="btn btn-sm btn-outline btn-primary mt-2">
                답글저장
              </button>
            </div>
          </div>
        )}

        {question.isReply && (
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <h4>답 글</h4>
              <pre>{question.reply.body}</pre>
            </div>
          </div>
        )}
      </div>

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
      <RemoveModal visible={replyModal} onConfirm={onReplyConfirm} onCancel={onReplyCancel} />
    </>
  );
}

export default ReadQuestion;
