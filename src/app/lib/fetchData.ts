import { mockData } from "./mockData";
import { delay } from "./utils";

const API_KEY = "API_KEY";

export const fetchCrUXData = async (urls: string[]) => {
  const responses = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(
        `https://chromeuxreport.googleapis.com/v1/records:queryRecord?alt=json&key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ url }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    }),
  );
  return responses;
};

export const fetchMockCrUXData = async (urls: string[]) => {
  await delay(2000);
  const responseJson = urls.map(() => mockData);
  return responseJson;
};
