import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-container">
			<p>© {currentYear} Superior Software Solutions</p>
			<p className="icons">
				<AiFillInstagram />
				<AiOutlineTwitter />
			</p>
		</div>
	);
};

export default Footer;
