import React from 'react';
import WriteNoticeTemplate from '../../containers/notice/WriteNoticeTemplate';
import useAdmin from '../../libs/hooks/useAdmin';

function WriteNoticePage() {
  useAdmin();

  return <WriteNoticeTemplate />;
}

export default WriteNoticePage;
