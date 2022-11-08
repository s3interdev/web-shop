const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="">
			Footer
			<p>© {currentYear} Superior Software Solutions</p>
		</footer>
	);
};

export default Footer;
