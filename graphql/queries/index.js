import { gql } from '@apollo/client';

/** get products query */
const getProducts = gql`
	query getProducts {
		products {
			name
			slug
			image {
				url
			}
			price
			details
		}
	}
`;

/** get product query */
const getProduct = gql`
	query getProduct($slug: String!) {
		products(where: { slug: $slug }) {
			name
			slug
			image {
				url
			}
			price
			details
		}
	}
`;

/** get product slug query */
const getProductSlug = gql`
	query getProductSlug {
		products {
			slug
		}
	}
`;

/** get banner query */
const getBanner = gql`
	query getBanner {
		banner(where: { title: "Banner" }) {
			title
			image {
				url
			}
			buttonText
			product
			description
			smallText
			mediumText
			largeTextPrimary
			largeTextSecondary
			discount
			season
		}
	}
`;

export { getBanner, getProduct, getProducts, getProductSlug };
