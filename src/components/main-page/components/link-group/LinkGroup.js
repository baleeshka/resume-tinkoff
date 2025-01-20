import styled from 'styled-components';

const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
	margin: 10px 0;
`;

const Link = styled.a`
	color: rgba(255, 255, 255, 0.81);
	transition:
		color 0.4s,
		font-size 0.4s;
	padding: 0px 60px;
	font-size: 20px;
	text-decoration: none;
	text-align: center;
	&:hover {
		color: #6495ed;
		font-size: 22px;
	}
	&:active {
		color: #0d5cf0;
	}
`;

const LinkGroup = ({ links }) => {
	return (
		<LinkContainer>
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.text}
				</Link>
			))}
		</LinkContainer>
	);
};

export default LinkGroup;
