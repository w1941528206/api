import React from 'react';

const Layout = (props: any) => {
  const { children } = props;

  return (
    <div className="h-screen">
      <div className="h-16 shadow flex items-center justify-start">
        <div className="font-mono text-xl font-bold ml-4">API Forge</div>
      </div>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">{children}</div>
    </div>
  )
};

export default Layout;
