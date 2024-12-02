import styled, { keyframes } from 'styled-components';
import tokenIcon from '/src/assets/images/icons/token-icon.png';

const glowText = keyframes`
  0% { text-shadow: 0 0 5px var(--accent-neon); }
  50% { text-shadow: 0 0 15px var(--accent-neon), 0 0 25px var(--accent-neon); }
  100% { text-shadow: 0 0 5px var(--accent-neon); }
`;

const TokenIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const TokenContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 2rem;
  background: rgba(10, 15, 44, 0.4);
  border: 1px solid var(--accent-neon);
  backdrop-filter: blur(5px);
  max-width: 800px;
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid var(--accent-neon);
  }

  &::before {
    top: -5px;
    left: -5px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: -5px;
    right: -5px;
    border-left: none;
    border-top: none;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 1rem;
  }
`;

const TokenTitle = styled.h2`
  font-family: 'RetroComputer', 'Press Start 2P', monospace, sans-serif;
  font-size: 2rem;
  color: var(--accent-gold);
  margin-bottom: 1.5rem;
  animation: ${glowText} 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }
`;

const TokenDescription = styled.p`
  font-family: 'RetroComputer', 'Press Start 2P', monospace, sans-serif;
  font-size: 1rem;
  color: var(--text-light);
  line-height: 2;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.6;
    padding: 0 0.5rem;
  }
`;

const TokenInfo = () => (
  <TokenContainer>
    <TokenTitle>
      <TokenIcon src={tokenIcon} alt="OVERSEER" />
      $OVERSEER
    </TokenTitle>
    <TokenDescription>
      The token of our new religion. A cornerstone of our unity. A signal of brotherhood. A path to our future.
    </TokenDescription>
  </TokenContainer>
);

export default TokenInfo; 