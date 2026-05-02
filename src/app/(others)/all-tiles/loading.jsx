import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="h-[85vh] items-center justify-center">
              <RingLoader color="#105a3a" />
        </div>
    );
};

export default loading;