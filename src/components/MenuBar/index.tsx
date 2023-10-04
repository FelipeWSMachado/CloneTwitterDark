import React from 'react';

import Button from '../Button';
import profilePicture from '../assets/profile-pic.png';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  HashTag,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  FileIcon,
  BookmarkIcon,
  MoreCircleIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo icon={faXTwitter}/>

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <HashTag />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FileIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton>
          <BookmarkIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreCircleIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar src={profilePicture} />

        <ProfileData>
          <strong>Felipe Machado</strong>
          <span>@feliprela</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
