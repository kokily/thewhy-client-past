import React, { forwardRef, Ref } from 'react';

interface LocateMapProps {
  ref: Ref<HTMLDivElement>;
}

const LocateMap: React.FC<LocateMapProps> = forwardRef((_, ref) => {
  return (
    <div style={{ width: '1140px', height: '600px' }}>
      <div ref={ref} style={{ width: '100%', height: '100%' }} />
    </div>
  );
});

export default LocateMap;
