import { useLoaderStore } from '../store/loaderStore'
import styled from 'styled-components'
import videoFile from '../assets/videos/1.mp4'

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  
  &.fade-out {
    opacity: 0;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

export const VideoLoader = () => {
  const isLoading = useLoaderStore((state) => state.isLoading)

  if (!isLoading) return null

  return (
    <LoaderWrapper>
      <Video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </Video>
    </LoaderWrapper>
  )
} 