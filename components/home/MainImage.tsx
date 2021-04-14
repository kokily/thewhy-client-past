import React from 'react';

function MainImage() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <div className="post-image mt-10">
            <img
              src="/img/main/main.png"
              alt="main"
              style={{ height: 'auto', overflow: 'hidden' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainImage;