import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

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

  React.useEffect(() => {
    getLikeOptions().then((response) => {
      console.log(response);
      const newsElements = response.data.articles.map((article: any) => (
        <News
          author={article.author}
          title={article.title}
          key={article.id}
          url={article.url}
        />
      ));
      setUpdatedNews(newsElements);
    });
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
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
      </StickyBox>
    </Container>
  );
};

export default SideBar;
