import React from 'react';

const Layout = (props: any) => {
  const {
    children,
    notice,
  } = props;

  return (
    <div className="h-screen">
      <div className="h-16 shadow flex items-center justify-between">
        <div className="ml-4 flex items-center">
          <p className="font-mono text-xl font-bold">API Forge</p>
          <p className="text-sm rounded-md bg-slate-100 ml-2 w-10 flex items-center justify-center">beta</p>
        </div>
        <div className="grow flex justify-center">
          <div>{notice}</div>
        </div>
        <div className="flex">
          <div className="mr-10">Docs</div>
          <div className="mr-10">user</div>
        </div>
      </div>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto">{children}</div>
    </div>
  )
};

export default Layout;
