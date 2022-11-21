/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

const HeroBanner = ({ heroBanner }) => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">{heroBanner.smallText}</p>
				<h3>{heroBanner.mediumText}</h3>
				<h1>{heroBanner.largeTextPrimary}</h1>
				<img src={heroBanner.image.url} alt="headphones" className="hero-banner-image" />

				<div>
					<Link href={`/product/${heroBanner.product}`}>
						<button type="button">{heroBanner.buttonText}</button>
					</Link>

					<div className="desc">
						<h5>Description</h5>
						<p>{heroBanner.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
