import React from 'react';
import WriteNoticeTemplate from '../../../containers/notice/WriteNoticeTemplate';
import useAdmin from '../../../libs/hooks/useAdmin';

function EditNoticePage() {
  useAdmin();

  return <WriteNoticeTemplate edit={true} />;
}

export default EditNoticePage;
