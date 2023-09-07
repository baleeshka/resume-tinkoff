import styled from 'styled-components';
import { Logo } from './components';

const Description = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Учусь программировать
			<br />
			Работаю в Тинькофф
			<br />
			Играю в волейбол
		</Description>
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 15px 10px -13px rgba(255, 255, 255, 0.81);
	background-color: rgb(25, 25, 25);
`;
