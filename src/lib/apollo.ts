import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qxkey00af901z1g8x7a0pf/master',
    cache: new InMemoryCache() // possible to use Redis, LocalStorage etc
})