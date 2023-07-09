import React, { useState } from 'react';

const Home = () => {
  const [collapse, setCollapse] = useState(20);

  const handleClick = () => {
    if (collapse === 20) {
      setCollapse(64);
      return;
    }
    setCollapse(20);
  }

  return (
    <div className="h-full flex">
      <div className={`w-${collapse} bg-gray-200 duration-700`}>
        1
      </div>
      <div className="flex-1">
        <button onClick={handleClick}>收起</button>
      </div>
    </div>
  );
};

export default Home;
