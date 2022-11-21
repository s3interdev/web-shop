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

export { getBanner, getProducts };
