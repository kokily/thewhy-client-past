import React from 'react';
import WriteStoryContainer from '../../../containers/stories/WriteStoryContainer';
import useAdmin from '../../../libs/hooks/useAdmin';

function EditStoriesPage() {
  useAdmin();

  return <WriteStoryContainer edit={true} />;
}

export default EditStoriesPage;
