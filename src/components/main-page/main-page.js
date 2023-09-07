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
					Я обычный парень, который проходит курсы по Frontend-разработке, а
					также параллельно работает, чтобы не быть зависимым и не напрягать
					родителей.
					<br />
					Люблю играть в волейбол. Играю в любительской лиге в
					Санкт-Петербурге(КВЛ), бегаю по утрам после ночных смен :3
					<hr />
					<a href="https://codepen.io/baleeshka" target="_blank">
						Codepen
					</a>
					|
					<a href="https://t.me/l3ALEX" target="_blank">
						Telegram
					</a>
					|
					<a href="https://github.com/baleeshka" target="_blank">
						Github
					</a>
					<hr />
					Изучил HTML&CSS, JavaScript, React,TypeScript, Различные решения для
					стилизации: Bootstrap, Tailwind, Module-CSS,Styled Component.
					Глобальные стили тоже не забываю!
					<br />
					Естественно, что умею пользоваться Git-ом. К сожалению, опыта
					коммерческой веб-разработки нет, только мини-проекты по курсу.
					<hr />
				</div>
			</div>
			<FurtherDescription>
				<hr />
				Я довольно молодой парень, мой 9 класс выпал на пандемию, поэтому
				дистанционное обучение для меня тема довольно интересная. Был слегка
				проактивным в школе, поэтому вместе с учителями продумывали как проводить
				сами уроки и писать работы\тесты. Дискорд сервер вместо уродского Zoom,
				гугл-формы вместо фотографий и текстов самих тестов, различные онлайн
				платформы для прохождения квизов. Онлайн-курсы по веб-разработке и в целом
				моё самостоятельное онлайн обучение тоже даёт некоторое представление об
				онлайн-обучении. Понимаю, что это всё очень далеко от мира разработки
				дистанционного обучения, но решил поделиться этой информацией,а то как-то
				пусто получилось. В вакансии указали, что ищут людей, которые понимают
				специфику такого обучения, поэтому старался рассказать по максимуму о
				себе, так как пока опытом в разработке брать не могу :3
				<hr />
			</FurtherDescription>
		</>
	);
};

export const MainPage = styled(MainPageContainer)`
	padding: 20px 40px;
	margin: auto;
	text-align: center;
	display: flex;
`;
