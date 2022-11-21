/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

const Product = ({ product: { image, name, price, slug } }) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className="product-card">
					<img
						src={image[0].url}
						width={250}
						height={250}
						className="product-image"
						alt={name}
					/>

					<p className="product-name">{name}</p>
					<p className="product-price">${price}</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
