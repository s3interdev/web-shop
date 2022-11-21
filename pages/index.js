import client from '../graphql/apollo-client';
import { getBanner, getProducts } from '../graphql/queries';
import { FooterBanner, HeroBanner, Layout, Product } from '../components';

export const getStaticProps = async () => {
	const { data: banner } = await client.query({ query: getBanner });
	const { data: products } = await client.query({ query: getProducts });

	return {
		props: { products: products.products, banner: banner.banner },
		revalidate: 55,
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

			<div className="products-container">
				{products?.map((product) => (
					<Product key={product.slug} product={product} />
				))}
			</div>

			<FooterBanner footerBanner={banner} />
		</Layout>
	);
};

export default Home;
