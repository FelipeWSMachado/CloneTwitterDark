import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';
import list from '../../api/routes';
import fakeResponse from '../../api/fakeResponse.json';

const Feed: React.FC = () => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    console.log(fakeResponse[0].us);
    list()
      .then((response) => setNews(response.data.articles))
      .catch((error) => {
        if (error.code === 426) {
          //@ts-ignore
          setNews(fakeResponse[0].us);
        }
      });
  }, []);

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        {news.map((tweet) => {
          return (
            <Tweet
              //@ts-ignore
              img={tweet.urlToImage}
              //@ts-ignore
              desc={tweet.title}
              //@ts-ignore
              author={tweet.author}
              //@ts-ignore
              source={tweet.source.name}
              //@ts-ignore
              time={tweet.publishedAt}
            />
          );
        })}
      </Tweets>
    </Container>
  );
};

export default Feed;
