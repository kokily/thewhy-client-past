import React, { useState } from 'react';
import { MeType, StoryType } from '../../libs/types';
import MarkdownRender from '../common/MarkdownRender';
import PageHeader from '../common/PageHeader';
import RemoveModal from '../common/RemoveModal';

interface ReadStoryProps {
  story: StoryType;
  me: MeType | null;
  onRemove: () => void;
  onUpdate: () => void;
}

function ReadStory({ story, me, onRemove, onUpdate }: ReadStoryProps) {
  const month = new Date(story.created_at).getMonth();
  const day = new Date(story.created_at).getDay();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(story.created_at).getDay()];
  const [modal, setModal] = useState(false);

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

  return (
    <>
      <PageHeader title={'The Y 이야기'} />

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="blog-posts single-post">
              <article className="post post-large blog-single-post border-0 m-0 p-0">
                {/* Thumbnail */}
                <div className="post-image ml-0">
                  <img className="img-fluid border-radius-0" src={story.thumbnail} alt={''} />
                </div>

                {/* Date */}
                <div className="post-date ml-0">
                  <span className="day">
                    {month}/{day}
                  </span>
                  <span className="month">{dayOfWeek}</span>
                </div>

                {/* Meta */}
                <div className="post-content ml-0">
                  <h2 className="font-weight-semi-bold">{story.title}</h2>
                  <div className="post-meta">
                    {story.tags &&
                      story.tags.map((tag) => (
                        <span key={tag} style={{ color: '#6799FF' }}>
                          #{tag}
                        </span>
                      ))}
                  </div>

                  {/* Content */}
                  <MarkdownRender markdown={story.body} />
                </div>
              </article>
            </div>
          </div>
        </div>

        {me && (
          <div className="row justify-content-center">
            <button
              onClick={onRemoveClick}
              className="btn btn-outline btn-rounded btn-secondary btn-with-arrow mb-2"
            >
              삭 제
              <span>
                <i className="fas fa-chevron-right" />
              </span>
            </button>
            <button
              onClick={onUpdate}
              className="btn btn-outline btn-rounded btn-quaternary btn-with-arrow mb-2 ml-2"
            >
              수 정
              <span>
                <i className="fas fa-chevron-right" />
              </span>
            </button>
          </div>
        )}
      </div>
      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
}

export default ReadStory;
