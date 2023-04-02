import { Settings, Menu, Language } from '@styled-icons/material-outlined';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledHeader, StyledHeaderBlock, StyledLogo } from './HeaderStyles';
import { LanguageSelector, ThemeSelector } from '..';

import { StyledIconButton } from '@/components';
import { DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const queryLG = useMediaQuery(DEVICES.LG);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <StyledHeaderBlock>
        <StyledHeaderBlock>
          <StyledIconButton onClick={onMenuClick}>
            <Menu size={30} />
          </StyledIconButton>
          <StyledLogo onClick={handleLogoClick}>Wordex</StyledLogo>
        </StyledHeaderBlock>

        {!queryLG && (
          <StyledHeaderBlock>
            <ThemeSelector />
            <LanguageSelector />
          </StyledHeaderBlock>
        )}

        <StyledHeaderBlock>
          <StyledIconButton>
            <Language size={'1.5rem'} />
          </StyledIconButton>
          <StyledIconButton>
            <Settings size={'1.5rem'} />
          </StyledIconButton>
        </StyledHeaderBlock>
      </StyledHeaderBlock>
    </StyledHeader>
  );
};

export default Header;
