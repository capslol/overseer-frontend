import styled from 'styled-components';
import SocialIcons from './SocialIcons';
import logo from '../assets/images/logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--accent-neon);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoIcon = styled.img`
  height: 50px;
  filter: drop-shadow(0 0 10px var(--accent-neon));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoIcon src={logo} alt="Logo" />
      <SocialIcons />
    </HeaderContent>
  </HeaderContainer>
);

export default Header; 