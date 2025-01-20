import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const CopyableText = styled.span`
	color: rgba(255, 255, 255, 0.81);
	transition: color 0.4s;
	font-size: 20px;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: #6495ed;
	}
`;

const HeightText = styled.div`
	line-height: 35px;
	color: #ccc;

	div {
		display: flex;
		align-items: center;
		gap: 5px;
		position: relative;
	}
`;

const WeatherContainer = styled.div`
	color: #ccc;
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 350px;
	text-align: left;

	div {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

const decodeText = (text, onUpdate, delay = 60) => {
	const randomChar = () => {
		const chars =
			"!@#$%^&*()_+[]{}|;:',.<>?/1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return chars[Math.floor(Math.random() * chars.length)];
	};

	let currentText = Array(text.length).fill('');
	let iteration = 0;

	const interval = setInterval(() => {
		currentText = currentText.map((char, index) => {
			if (index < iteration) {
				return text[index];
			}
			return randomChar();
		});

		onUpdate(currentText.join(''));

		if (iteration >= text.length) {
			clearInterval(interval);
		}

		iteration += 1;
	}, delay);
};

const copyToClipboard = (text) => {
	const tempInput = document.createElement('input');
	tempInput.value = text;
	document.body.appendChild(tempInput);

	tempInput.select();
	tempInput.setSelectionRange(0, 99999);

	document.execCommand('copy');
	document.body.removeChild(tempInput);
};

export const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	const [decodedCity, setDecodedCity] = useState('');
	const [decodedWeather, setDecodedWeather] = useState('');
	const [decodedTemperature, setDecodedTemperature] = useState('');

	const [decodedPhone, setDecodedPhone] = useState('');
	const [decodedEmail, setDecodedEmail] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&units=metric&lang=ru&appid=adbadc8abc45ead874db46e88fa9cd5b',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(`${Math.round(main.temp)}°C`);
				setWeather(weather[0].description);

				decodeText(name, setDecodedCity, 50);
				decodeText(weather[0].description, setDecodedWeather, 70);
				decodeText(`${Math.round(main.temp)}°C`, setDecodedTemperature, 90);
			});

		decodeText('+79643830374', setDecodedPhone, 50);
		decodeText('balex.working@gmail.com', setDecodedEmail, 50);
	}, []);

	return (
		<div className={className}>
			<Toaster />
			<HeightText>
				<div>
					Телефон:{' '}
					<CopyableText
						onClick={() => {
							copyToClipboard(decodedPhone);
							toast.success('Текст скопирован!');
						}}
					>
						{decodedPhone}
					</CopyableText>
				</div>
				<div>
					Почта:{' '}
					<CopyableText
						onClick={() => {
							copyToClipboard(decodedEmail);
							toast.success('Текст скопирован!');
						}}
					>
						{decodedEmail}
					</CopyableText>
				</div>
			</HeightText>
			<WeatherContainer>
				<div>Город: {decodedCity}</div>
				<div>Погода: {decodedWeather}</div>
				<div>Температура: {decodedTemperature}</div>
			</WeatherContainer>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	padding: 20px 40px;
	background-color: rgb(25, 25, 25);
	box-shadow: 0px -15px 10px -15px rgba(255, 255, 255, 0.81);
	font-weight: 600;
	color: #fff;
`;
