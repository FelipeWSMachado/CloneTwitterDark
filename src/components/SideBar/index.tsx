import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import fakeResponse from '../../api/fakeResponse.json';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import { getLikeOptions } from '../../api/routes';

const SideBar: React.FC = () => {
  const [updatedNews, setUpdatedNews] = React.useState<JSX.Element[]>([]);

  const setResponses = (resp: any) => {
    const newsElements = resp.map((article: any) => (
      <News
        author={article.author}
        title={article.title}
        key={article.id}
        url={article.url}
      />
    ));
    setUpdatedNews(newsElements);
  };

  React.useEffect(() => {
    getLikeOptions()
      .then((response) => {
        setResponses(response.data.articles);
      })
      .catch((error) => {
        if (error.status === 426) {
          setResponses(fakeResponse[0].br);
        }
      });
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Linus Torvalds"
              nickname="@Linus__Torvalds"
              img="https://pbs.twimg.com/profile_images/2828597835/0f1840e9c2fbafa93fe6f0d7ccf64a3e_400x400.jpeg"
            />,
            <FollowSuggestion
              name="GitHub"
              nickname="@github"
              img="https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png"
            />,
            <FollowSuggestion
              name="React"
              nickname="@reactjs"
              img="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
            />,
          ]}
        />
        <List title="O que está acontecendo" elements={updatedNews} />
      </Body>
    </Container>
  );
};

export default SideBar;
