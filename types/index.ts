export type Meme = {
  created_utc: number;
  title: string;
  url: string;
  subreddit: string;
};

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://reddit-meme.p.rapidapi.com/memes/top",
  headers: {
    "X-RapidAPI-Key": "c30c5aac7cmsh5158036be1023a1p1fbcf7jsn07c351c58b55",
    "X-RapidAPI-Host": "reddit-meme.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
