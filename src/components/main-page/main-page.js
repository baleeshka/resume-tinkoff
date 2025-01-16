import styled from 'styled-components';
import { Avatar } from './components';
import Skill from './components/skill/skill';

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
				Мои навыки:
				<Skill
					backgroundImage="linear-gradient(to right, #0acffe 0%, #495aff 100%);"
					technology="CSS"
				/>
				<Skill
					backgroundImage="linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;"
					technology="HTML"
				/>
				<Skill
					backgroundImage="linear-gradient(60deg, #29323c 0%, #485563 100%)"
					technology="JavaScript"
				/>
				<Skill
					backgroundImage="linear-gradient(to top, #09203f 0%, #537895 100%)"
					technology="React"
				/>
				<Skill
					backgroundImage="linear-gradient(to right, #868f96 0%, #596164 100%)"
					technology="Git"
				/>
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
