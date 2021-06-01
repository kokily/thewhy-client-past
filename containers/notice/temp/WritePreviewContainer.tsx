import React from 'react';
import WritePreview from '../../../components/notice/temp/WritePreview';

interface WritePreviewContainerProps {
  title: string;
  body: string;
}

function WritePreviewContainer({ title, body }: WritePreviewContainerProps) {
  return <WritePreview title={title} body={body} />;
}

export default WritePreviewContainer;
