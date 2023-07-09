import React from 'react';
import Layout from './components/layout';
import Notice from './pages/notice';
import Home from './pages/home';

const App: any = () => {
  return (
    <Layout notice={<Notice />}>
      <Home />
    </Layout>
  )
};

export default App;
