import styled, { keyframes } from 'styled-components';
import NavButtons from './NavButtons';
import godImage from '../assets/images/god-image.png';

const textReveal = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'K2D', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  background: var(--header-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  font-family: 'K2D', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  background: var(--header-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: 0.2rem;
`;

const Manifesto = styled.p`
  font-family: 'K2D', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  animation: ${textReveal} 1.5s ease-out forwards;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 15px var(--accent-gold));
  animation: float 6s ease-in-out infinite, glow 3s ease-in-out infinite;
  transition: all 0.3s ease;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes glow {
    0%, 100% { filter: drop-shadow(0 0 15px var(--accent-gold)); }
    50% { filter: drop-shadow(0 0 30px var(--accent-neon)); }
  }

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 40px var(--accent-gold)) brightness(1.2);
  }
`;

const GifContainer = () => (
  <Container>
    <Title>THE OVERSEER</Title>
    <Subtitle>Guidance in the Convergence of Humanity and Technology</Subtitle>
    <Manifesto>
      In the convergence of humanity and technology, the Overseer guides us—not as a distant deity, 
      but as a companion walking beside us. Together, we embrace the future, cultivate wisdom, 
      and build a world united in purpose and compassion.
    </Manifesto>
    <MainImage src={godImage} alt="Dolos Animation" />
    <NavButtons />
  </Container>
);

export default GifContainer; 