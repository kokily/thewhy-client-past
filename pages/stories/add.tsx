import React from 'react';
import WriteStoryContainer from '../../containers/stories/WriteStoryContainer';
import useAdmin from '../../libs/hooks/useAdmin';

function AddStoryPage() {
  useAdmin();

  return <WriteStoryContainer />;
}

export default AddStoryPage;
