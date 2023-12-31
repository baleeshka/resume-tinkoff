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
					также параллельно работает.
					<br />
					Люблю играть в волейбол. Играю в любительской лиге в
					Санкт-Петербурге(КВЛ), бегаю по утрам после ночных смен :3
					<hr />
					<a href="https://t.me/l3ALEX" target="_blank">
						Telegram
					</a>
					|
					<a href="https://github.com/baleeshka" target="_blank">
						Github
					</a>
					<hr />
					Сейчас работаю в Страховании, хотел бы попробовать свои силы в
					Инвестициях, так как сами инвестиции и этот отдел кажется очень
					интересным сам по себе и в плане задач.
					<br />
					Естественно, умею пользоваться TCRM. Опыта работы в инвестициях нет,
					сам только автоследование подключил.
					<hr />
				</div>
			</div>
			<FurtherDescription>
				<hr />
				Опыт моей работы довольно скромен в силу своего возраста. Из чего-то
				более-менее сносного работал официантом и менеджером в WB. В Тинькофф
				пошёл работать из-за того, что меня заинтересовал опыт удалённой работы и
				работа в большой компании, а также из-за желания узнать что-то новое.
				Навыки работы за компьютером очень даже, так как изучаю программирование и
				в целом много времени в своей жизни провёл с техникой.
				<br />
				<hr />
				Стрессоустойчивость и пунктуальность в кармане, единственный раз опоздал
				на смену из-за того, что ночное расписание меня сбило с толку, в августе
				все смены были с 8, а 1 сентября смена была в 7, но я потерялся во
				временах года, а расписание с телефона сломалось. Был уверен, что всё как
				обычно - ночникам смены не меняют. Но кто же знал, что уже день знаний!
				Стараюсь учится чему-то новому и развиваться, целеустремлённый.
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
