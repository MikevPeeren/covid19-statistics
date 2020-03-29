// React
import React from 'react';

// External
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingWheel: React.FC = () => {
  return (
    <div>
      <CircularProgress
        size={100}
        color={'secondary'}
        thickness={3.5}
        variant={'indeterminate'}
      />
    </div>
  );
};

export default LoadingWheel;
