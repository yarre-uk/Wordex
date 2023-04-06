import { Settings, Menu, Language } from '@styled-icons/material-outlined';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledHeader, StyledHeaderBlock, StyledLogo } from './HeaderStyles';
import { LanguageSelector, ThemeSelector } from '..';

import { IconButton } from '@/components';
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
          <IconButton onClick={onMenuClick}>
            <Menu size={30} />
          </IconButton>
          <StyledLogo onClick={handleLogoClick}>Wordex</StyledLogo>
        </StyledHeaderBlock>

        {!queryLG && (
          <StyledHeaderBlock>
            <ThemeSelector />
            <LanguageSelector />
          </StyledHeaderBlock>
        )}

        <StyledHeaderBlock>
          <IconButton>
            <Language size={'1.5rem'} />
          </IconButton>
          <IconButton>
            <Settings size={'1.5rem'} />
          </IconButton>
        </StyledHeaderBlock>
      </StyledHeaderBlock>
    </StyledHeader>
  );
};

export default Header;
