import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    cache: new InMemoryCache(),
  });

  return client;
};
