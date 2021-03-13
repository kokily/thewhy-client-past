import React from 'react';
import Link from 'next/link';
import { MeType, StoryType } from '../../libs/types';
import Search from '../common/Search';
import StoryCard from './StoryCard';

interface StoriesProps {
  stories: StoryType[];
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  me: MeType | null;
}

function Stories({ stories, search, onChange, onSearch, onKeyPress, me }: StoriesProps) {
  return (
    <>
      <div className="container py-2 pb-4">
        <Search
          mode={'제목'}
          search={search}
          onChange={onChange}
          onSearch={onSearch}
          onKeyPress={onKeyPress}
        />
      </div>

      {me && (
        <div className="container py-2">
          <div className="row justify-content-center">
            <Link href={`/stories/add`}>
              <a className="btn btn-outline btn-rounded btn-primary btn-with-arrow mb-2">
                스토리 작성
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      )}

      <div className="container py-2 mb-5">
        {stories && stories.length > 0 ? (
          <div className="row">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                id={story.id}
                title={story.title}
                thumbnail={story.thumbnail}
                date={story.created_at}
              />
            ))}
          </div>
        ) : (
          <div className="row justify-content-center mb-2">
            <h5>아직 작성된 스토리가 없습니다.</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default Stories;
