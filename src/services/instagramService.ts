import axios from "axios";
import dotenv from "dotenv";

async function fetchInstagramData(username: string): Promise<InstagramPost[]> {
  const options = {
    method: "GET",
    url: "https://instagram130.p.rapidapi.com/account-feed",
    params: { username },
    headers: {
      "X-RapidAPI-Key": dotenv.config().parsed?.XRAPIDAPIKEY || "",
      "X-RapidAPI-Host": "instagram130.p.rapidapi.com",
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

export default fetchInstagramData;
