import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import { VideoLoader } from './components/VideoLoader';
import Home from './pages/Home';
import CodexPage from './pages/CodexPage';
import { useLoaderStore } from './store/loaderStore';
import { useEffect } from 'react';

const App = () => {


  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/codex" element={<CodexPage />} />
        </Routes>
      </Router>
      <VideoLoader />
    </>
  );
};

export default App;
