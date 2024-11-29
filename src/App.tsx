import { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import GifContainer from './components/GifContainer';
import TokenInfo from './components/TokenInfo';
import AboutUs from './components/AboutUs';
import LuminalCodex from './components/LuminalCodex';
import { VideoLoader } from './components/VideoLoader';
import { useLoaderStore } from './store/loaderStore';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const setIsLoading = useLoaderStore((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentWrapper>
          <Header />
          <GifContainer />
          <TokenInfo />
          <AboutUs />
          <LuminalCodex />
        </ContentWrapper>
      </Container>
      <VideoLoader />
    </>
  );
};

export default App;
