import styled from 'styled-components';
import { Avatar } from './components';

const FurtherDescription = styled.div`
	padding: 20px 40px;
	margin: auto;
`;

export const MainPageContainer = ({ className }) => {
	return (
		<>
			<div className={className}>
				<Avatar />
				<div>
					<hr />
					Активно изучаю программирование и пытаюсь найти работу в данном
					направлении, чтобы получить коммерческий опыт разработки и повысить
					уровень своих навыков программирования
					<hr />
					<a href="https://t.me/l3ALEX" target="_blank">
						Telegram
					</a>
					<a href="https://github.com/baleeshka" target="_blank">
						Github
					</a>
					<hr />
					Работал в бэк-офисе Инвестиций на очереди маркетинговых акций, однако
					уволился для того, чтобы начать развиваться в IT направлении
					<hr />
				</div>
			</div>
			<FurtherDescription>
				<hr />
				Занимаюсь волейболом и хожу в зал.
				<br />
				<hr />
				Из своего небольшого опыта работы могу выделить следующие сильные стороны:
				Ответственность, Коммуникабельность, Дружелюбие
				<hr />
			</FurtherDescription>
		</>
	);
};

export const MainPage = styled(MainPageContainer)`
	padding: 20px 40px;
	margin: auto;
	display: flex;
	align-items: center;
`;
