import React from 'react';
import useAdmin from '../../libs/hooks/useAdmin';
import AddContainer from '../../containers/stories/AddContainer';

function AddStoryPage() {
  useAdmin();

  return <AddContainer />;
}

export default AddStoryPage;
