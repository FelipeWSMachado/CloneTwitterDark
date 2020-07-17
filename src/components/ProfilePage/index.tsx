import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner >
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Felipe Machado</h1>
        <h2>@feliprela</h2>

        <p>
          Desenvolvedor  <a href="https://github.com/FelipeWSMachado">@github</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de dezembro de 1993
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
