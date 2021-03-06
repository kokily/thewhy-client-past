import React, { forwardRef, Ref } from 'react';

interface FooterMapProps {
  ref: Ref<HTMLDivElement>;
}

const FooterMap: React.FC<FooterMapProps> = forwardRef((_, ref) => {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
    </div>
  );
});

export default FooterMap;
