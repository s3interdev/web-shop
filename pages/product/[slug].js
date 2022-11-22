/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import client from '../../graphql/apollo-client';
import { getProduct, getProducts, getProductSlug } from '../../graphql/queries';
import { Layout, Product } from '../../components';

export const getStaticPaths = async () => {
	const { data: products } = await client.query({ query: getProductSlug });

	const paths = products.products.map((product) => {
		return { params: { slug: product.slug } };
	});

	return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params: { slug } }) => {
	const { data: products } = await client.query({ query: getProducts });
	const { data: product } = await client.query({
		query: getProduct,
		variables: { slug },
	});

	return {
		props: { product: product.products[0], products: products.products },
		revalidate: 34,
	};
};

const ProductDetails = ({ product: { details, image, name, price }, products }) => {
	const [index, setIndex] = useState(0);

	return (
		<Layout title={`${name}`}>
			<div className="product-detail-container">
				<div>
					<div className="image-container">
						<img src={image[index].url} alt={name} />
					</div>
					<div className="small-images-container">
						{image?.map((item, i) => (
							<img
								src={item.url}
								key={i}
								alt="image"
								className={i === index ? 'small-image selected-image' : 'small-image'}
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
				</div>
				<div className="product-detail-desc">
					<h1>{name}</h1>
					<div className="reviews">
						<div>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div>
					<h4>Details: </h4>
					<p>{details}</p>
					<p className="price">${price}</p>
					<div className="quantity">
						<h3>Quantity:</h3>
						<p className="quantity-desc">
							<span className="minus" onClick="">
								<AiOutlineMinus />
							</span>
							<span className="num" onClick="">
								0
							</span>
							<span className="plus" onClick="">
								<AiOutlinePlus />
							</span>
						</p>
					</div>
					<div className="buttons">
						<button type="button" className="add-to-cart" onClick="">
							Add to Cart
						</button>
						<button type="button" className="buy-now" onClick="">
							Buy Now
						</button>
					</div>
				</div>
				<div className="maylike-products-wrapper">
					<h2>You may also like</h2>
					<div className="marquee">
						<div className="maylike-products-container track">
							{products.map((item) => (
								<Product key={item.slug} product={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProductDetails;
