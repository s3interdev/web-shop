import Head from 'next/head';
import { Footer, Navbar } from './';

const Layout = ({ title, children }) => {
	return (
		<div className="layout">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Web Shop e-Commerce application" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>{title ? title + ' | Web Shop' : 'Web Shop'}</title>
			</Head>

			<div>
				<header>
					<Navbar />
				</header>

				<main>{children}</main>

				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
};

export default Layout;
