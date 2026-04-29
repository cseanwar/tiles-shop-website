import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className="h-[85vh] items-center justify-center">
        <RingLoader color="#105a3a" />
      {/* Global loading */}
      {/* <span className="loading loading-dots loading-xl"></span> */}
    </div>
    );
};

export default LoadingPage;