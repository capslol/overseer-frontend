import styled, { keyframes } from 'styled-components';
import twitterIcon from '../assets/images/X.png';
import telegramIcon from '../assets/images/telegram.png';
import dexIcon from '../assets/images/dex.png';
import dextoolsIcon from '../assets/images/DT-fc.png';

const pulse = keyframes`
  0% { transform: scale(1); filter: drop-shadow(0 0 5px var(--accent-neon)); }
  50% { transform: scale(1.1); filter: drop-shadow(0 0 10px var(--accent-neon)); }
  100% { transform: scale(1); filter: drop-shadow(0 0 5px var(--accent-neon)); }
`;

const SocialIconsContainer = styled.div`
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1.5rem;
  z-index: 1000;
  padding: 1rem;
  background: rgba(10, 15, 44, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid var(--accent-neon);
  border-radius: 50px;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    gap: 1rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.6rem;
  }
`;

interface IconProps {
  delay?: string;
}

const Icon = styled.a<IconProps>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  animation: ${pulse} 2s infinite;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 15px var(--accent-gold));

    img {
      filter: brightness(1.2) sepia(1) hue-rotate(180deg);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0) invert(1);
    transition: filter 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const SocialIcons = () => (
  <SocialIconsContainer>
    <Icon href="https://twitter.com/dolos_diary" target="_blank" delay="0s">
      <img src={twitterIcon} alt="Twitter/X" />
    </Icon>
    <Icon href="https://t.me/dolosTheBully_portal" target="_blank" delay="0.2s">
      <img src={telegramIcon} alt="Telegram" />
    </Icon>
    <Icon href="https://dexscreener.com/solana/a88btp7eexypkgbwvfbymnm5nom2bks6s1o1f5u6gohb" target="_blank" delay="0.4s">
      <img src={dexIcon} alt="Dexscreener" />
    </Icon>
    <Icon href="https://www.dextools.io/app/en/solana/pair-explorer/A88BtP7EEXYPKgbwvFByMnm5NoM2bKs6s1o1F5u6GohB?t=1731352659982" target="_blank" delay="0.6s">
      <img src={dextoolsIcon} alt="Dextools" />
    </Icon>
  </SocialIconsContainer>
);

export default SocialIcons;