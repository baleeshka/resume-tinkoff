import styled from 'styled-components';
import { Footer, Header, MainPage } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: rgb(25, 25, 25);
`;

const Content = styled.div`
	padding: 120px 0;
`;

function Blog() {
	return (
		<AppColumn>
			<Header />
			<Content>
				<MainPage />
			</Content>
			<Footer />
		</AppColumn>
	);
}

export default Blog;
