import React from 'react';
import Link from 'next/link';

interface StoryCardProps {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
}

function StoryCard({ id, title, thumbnail, date }: StoryCardProps) {
  return (
    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
      <div className="card" style={{ height: '100%' }}>
        <img className="card-img-top" src={thumbnail} alt="Card Image" />
        <div className="card-body">
          <h4 className="card-title mb-1 text-4 font-weight-bold">
            <Link href={`/stories/${id}`} passHref={true}>
              <a className="text-decoration-none">{title}</a>
            </Link>
          </h4>
          <span className="read-more">{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
