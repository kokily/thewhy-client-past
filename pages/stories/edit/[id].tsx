import React from 'react';
import AddContainer from '../../../containers/stories/AddContainer';
import useAdmin from '../../../libs/hooks/useAdmin';

function EditStoriesPage() {
  useAdmin();

  return <AddContainer edit={true} />;
}

export default EditStoriesPage;
