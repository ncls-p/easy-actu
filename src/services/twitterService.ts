import axios from "axios";

async function fetchTwitterData(username: string): Promise<TwitterData[]> {
  const options = {
    method: "GET",
    url: "https://twitter-v24.p.rapidapi.com/user/tweets",
    params: { username, limit: "40" },
    headers: {
      "X-RapidAPI-Key": "2b1b0461eamsh1f96d9bf5adf252p1ee94fjsnac9beaa47f66",
      "X-RapidAPI-Host": "twitter-v24.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default fetchTwitterData;
