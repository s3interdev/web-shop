/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

const FooterBanner = ({
	footerBanner: {
		buttonText,
		description,
		discount,
		image,
		largeTextPrimary,
		largeTextSecondary,
		mediumText,
		product,
		season,
		smallText,
		title,
	},
}) => {
	return (
		<div className="footer-banner-container">
			<div className="banner-desc">
				<div className="left">
					<p>{discount}</p>
					<h3>{largeTextPrimary}</h3>
					<h3>{largeTextSecondary}</h3>
					<p>{season}</p>
				</div>

				<div className="right">
					<p>{smallText}</p>
					<h3>{mediumText}</h3>
					<p>{description}</p>
					<Link href={`/product/${product}`}>
						<button type="button">{buttonText}</button>
					</Link>
				</div>

				<img src={image.url} className="footer-banner-image" alt={title} />
			</div>
		</div>
	);
};

export default FooterBanner;
