import { FooterBanner, HeroBanner, Layout, Product } from '../components/index';

const Home = () => {
	return (
		<Layout title="Home">
			<HeroBanner />

			<div className="products-heading">
				<h2>Best Selling Products</h2>
				<p>Speakers of many variations</p>
			</div>

			<div className="products-container">
				<Product />
				{[`Product-1`, `Product-2`, `Product-3`].map((product) => product)}
			</div>

			<FooterBanner />
		</Layout>
	);
};

export default Home;
