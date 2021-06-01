import React from 'react';
import WriteNoticecontainer from '../../../containers/notice/WriteNoticeContainer';
import useAdmin from '../../../libs/hooks/useAdmin';

function EditNoticePage() {
  useAdmin();

  return <WriteNoticecontainer edit={true} />;
}

export default EditNoticePage;
