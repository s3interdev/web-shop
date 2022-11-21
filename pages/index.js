import client from '../graphql/apollo-client';
import { getBanner, getProducts } from '../graphql/queries';
import { FooterBanner, HeroBanner, Layout } from '../components';

export const getServerSideProps = async () => {
	const { data: banner } = await client.query({ query: getBanner });
	const { data: products } = await client.query({ query: getProducts });

	return {
		props: { products: products.products, banner: banner.banner },
	};
};

const Home = ({ products, banner }) => {
	return (
		<Layout title="Home">
			<HeroBanner heroBanner={banner} />

			<div className="products-heading">
				<h2>Best Selling Products</h2>
				<p>Speakers of many variations</p>
			</div>

			<div className="products-container">{products?.map((product) => product.name)}</div>

			<FooterBanner />
		</Layout>
	);
};

export default Home;
