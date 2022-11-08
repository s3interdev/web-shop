import Head from 'next/head';

import { Footer, Navbar } from './index';

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Web Shop e-Commerce application" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>{title ? title + ' | Web Shop' : 'Web Shop'}</title>
			</Head>

			{/** body section start */}
			<div>
				{/** header section start start */}
				<header>
					<Navbar />
				</header>
				{/** header section start end */}

				{/** main content section start */}
				<main>{children}</main>
				{/** main content section end */}

				{/** footer section start start */}
				<footer>
					<Footer />
				</footer>
				{/** footer section start start */}
			</div>
			{/** body section end */}
		</>
	);
};

export default Layout;
