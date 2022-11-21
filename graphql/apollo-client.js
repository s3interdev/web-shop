import { ApolloClient, InMemoryCache } from '@apollo/client';

/** graphql endpoint */
const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

/** configure in-memory cache */
const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				banner: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				products: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

/** configure the apollo client */
const client = new ApolloClient({
	uri: endpoint,
	cache: cache,
});

export default client;
