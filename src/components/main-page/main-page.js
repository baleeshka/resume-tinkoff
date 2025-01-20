import styled from 'styled-components';
import { Avatar } from './components';
import LinkGroup from './components/link-group/LinkGroup';
import Section from './components/section/section';
import Skill from './components/skill/skill';

const FurtherDescription = styled.div`
	padding: 20px 40px;
	margin: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
	align-items: center;
`;

export const MainPageContainer = ({ className }) => {
	const links = [
		{ href: 'https://t.me/l3ALEX', text: 'Telegram' },
		{ href: 'https://github.com/baleeshka', text: 'Github' },
	];
	return (
		<>
			<div className={className}>
				<Avatar />
				<div>
					<Section>
						Мне 20 лет. Я не учусь в высших учебных заведениях, однако готов
						уделять всё своё время программированию
					</Section>
					<LinkGroup links={links} />
					<Section>
						Обучался программированию самостоятельно, параллельно работая в
						разных местах, чтобы поддерживать себя на плаву самостоятельно.
						Сейчас в активном поиске работы, чтобы начать свой путь
						разработчика и развивать навыки в выбранной области
					</Section>
				</div>
			</div>
			<FurtherDescription>
				Мои навыки:
				<Skill technology="CSS3" />
				<Skill technology="HTML5" />
				<Skill technology="JavaScript" />
				<Skill technology="TypeScript" />
				<Skill technology="React" />
				<Skill technology="Git" />
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
