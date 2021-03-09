import React from 'react';
import { StoryType } from '../../libs/types';
import Search from '../common/Search';
import StoryCard from './StoryCard';

interface StoriesProps {
  stories: StoryType[];
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Stories({ stories, search, onChange, onSearch, onKeyPress }: StoriesProps) {
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

      <div className="container py-2">
        <div className="row">
          {stories && stories.length > 0 && (
            <>
              {stories.map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  thumbnail={story.thumbnail}
                  date={story.created_at}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Stories;
