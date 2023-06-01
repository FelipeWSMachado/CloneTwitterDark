import axios from 'axios';

export default async function getArticle() {
  return await axios.get(
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52ccc5d13b824a61bc758bd59bf9228d'
  );
}

export async function getLikeOptions() {
  return await axios.get(
    'https://newsapi.org/v2/top-headlines?country=br&apiKey=52ccc5d13b824a61bc758bd59bf9228d'
  );
}
