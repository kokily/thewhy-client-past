import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import AddContainer from '../../containers/question/AddContainer';
import useAdmin from '../../libs/hooks/useAdmin';

function AddQuestionPage() {
  useAdmin();

  return (
    <PageTemplate>
      <AddContainer />
    </PageTemplate>
  );
}

export default AddQuestionPage;
