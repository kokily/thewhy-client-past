import React from 'react';
import WriteNoticeContainer from '../../containers/notice/WriteNoticeContainer';
import useAdmin from '../../libs/hooks/useAdmin';

function WriteNoticePage() {
  useAdmin();

  return <WriteNoticeContainer />;
}

export default WriteNoticePage;
