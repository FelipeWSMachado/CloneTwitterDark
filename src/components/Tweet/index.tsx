import React from 'react';
import moment from 'moment';
import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';
import profilePicture from '../assets/profile-pic.png';

const Tweet: React.FC<{
  img: string;
  desc: string;
  author: string;
  time: Date;
  source: string;
}> = ({ img, desc, author, time, source }) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar src={profilePicture} />

        <Content>
          <Header>
            <strong>{author}</strong>
            <span>@{source}</span>
            <Dot />
            <time>{moment(time).format('MMM Do YY')}</time>
          </Header>

          <Description>{desc}</Description>

          <ImageContent src={img} />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
