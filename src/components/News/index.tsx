import React from 'react';

import { Container } from './styles';

const News: React.FC<{ author: string; title: string; url: string }> = ({
  author,
  title,
  url,
}) => {
  const handleFollowClick = () => {
    window.location.href = url;
  };
  return (
    <Container onClick={handleFollowClick}>
      <span>{author}</span>
      <strong>{title}</strong>
    </Container>
  );
};

export default News;
