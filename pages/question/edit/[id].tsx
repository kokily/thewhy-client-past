import React from 'react';
import PageTemplate from '../../../components/common/PageTemplate';
import AddContainer from '../../../containers/question/AddContainer';

function QuestionEditPage() {
  return (
    <PageTemplate>
      <AddContainer edit={true} />
    </PageTemplate>
  );
}

export default QuestionEditPage;
