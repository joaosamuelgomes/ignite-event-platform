import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o51m920m2x01xm8ime8cjw/master",
    cache: new InMemoryCache()
})